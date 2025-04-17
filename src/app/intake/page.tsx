"use client";

import { useState } from "react";
import { useFormContext } from "@/context/FormContext";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const steps = [
  "Youth Information",
  "Offense & Risk",
  "Contacts & Stakeholders",
  "Education",
  "Decision Path",
  "Review & Submit",
];

type FormData = {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  raceEthnicity: string;
  gradeLevel: string;
  language: string;
  school: string;
  intakeDate: string;
  referralType: string;
  offense: string;
  offenseDate: string;
  severity: string;
  riskScore: number;
  riskToolUsed: string;
  contacts: Array<{
    name: string;
    role: string;
    organization: string;
    email: string;
    notes: string;
  }>;
  schoolStatus: string;
  hasIEP504: string;
  estimatedCredits: number;
  truancyNotes: string;
  learningStyleNotes: string;
  recommendation: string;
  recommendationReason: string;
  restitution: string;
  courtDate: string;
  recommendationNotes: string;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  dob: "",
  gender: "",
  raceEthnicity: "",
  gradeLevel: "",
  language: "",
  school: "",
  intakeDate: "",
  referralType: "",
  offense: "",
  offenseDate: "",
  severity: "",
  riskScore: 0,
  riskToolUsed: "",
  contacts: [],
  schoolStatus: "",
  hasIEP504: "",
  estimatedCredits: 0,
  truancyNotes: "",
  learningStyleNotes: "",
  recommendation: "",
  recommendationReason: "",
  restitution: "",
  courtDate: "",
  recommendationNotes: "",
};

export default function IntakePage() {
  const [stepIndex, setStepIndex] = useState(0);
  const { formData, setFormData } = useFormContext();

  const next = () =>
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  const back = () => setStepIndex((prev) => Math.max(prev - 1, 0));

  const generatePdf = async (formData: FormData) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const marginLeft = 50;
    let y = 750;
    const lineHeight = 22;

    const drawLabel = (
      label: string,
      value: string | number | undefined | null
    ) => {
      page.drawText(`${label}:`, {
        x: marginLeft,
        y,
        size: 12,
        font: boldFont,
        color: rgb(0.1, 0.1, 0.1),
      });
      page.drawText(String(value ?? "—"), {
        x: marginLeft + 120,
        y,
        size: 12,
        font,
        color: rgb(0.1, 0.1, 0.1),
      });
      y -= lineHeight;
    };

    const drawSectionTitle = (title: string) => {
      y -= 10;
      page.drawText(title, {
        x: marginLeft,
        y,
        size: 14,
        font: boldFont,
        color: rgb(0, 0.38, 0.55),
      });
      y -= lineHeight;
    };

    // Title
    page.drawText("Second Chance Youth Map", {
      x: 120,
      y,
      size: 18,
      font: boldFont,
      color: rgb(0, 0.2, 0.6),
    });
    y -= 40;

    // Section: Youth Information
    drawSectionTitle("Youth Information");
    drawLabel(
      "Youth",
      `${formData.firstName ?? ""} ${formData.lastName ?? ""}`
    );
    drawLabel("Grade", formData.gradeLevel);
    drawLabel("IEP/504", formData.hasIEP504);

    // Section: Offense & Risk
    drawSectionTitle("Offense & Risk");
    drawLabel("Referral", formData.referralType);
    drawLabel("Offense", formData.offense);
    drawLabel("Offense Date", formData.offenseDate);
    drawLabel(
      "Risk Assessment",
      `${formData.riskToolUsed ?? "—"}, Score: ${formData.riskScore ?? "—"}`
    );

    // Section: Recommendation
    drawSectionTitle("Recommendation");
    drawLabel("Path", formData.recommendation);
    drawLabel("Justification", formData.recommendationReason);
    drawLabel("Restitution", formData.restitution);
    drawLabel("Next Court Date", formData.courtDate);
    drawLabel("Notes", formData.recommendationNotes);

    // Section: Contacts
    drawSectionTitle("Contacts Involved");
    const contactRoles =
      formData.contacts?.length > 0
        ? formData.contacts.map((c) => `${c.role} (${c.name})`).join(", ")
        : "—";
    drawLabel("Involved Parties", contactRoles);

    // Footer
    const today = new Date().toLocaleDateString();
    page.drawText(`Generated on: ${today}`, {
      x: marginLeft,
      y: 40,
      size: 9,
      font,
      color: rgb(0.5, 0.5, 0.5),
    });

    page.drawText("Powered by Second Chance Youth Map", {
      x: marginLeft,
      y: 25,
      size: 9,
      font: boldFont,
      color: rgb(0.1, 0.3, 0.6),
    });

    // Save & download
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `youth-intake-${formData.firstName || "record"}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [contactInput, setContactInput] = useState({
    name: "",
    role: "",
    organization: "",
    email: "",
    notes: "",
  });

  const handleAddContact = () => {
    setFormData({
      ...formData,
      contacts: [...formData.contacts, contactInput],
    });

    // reset local contact form
    setContactInput({
      name: "",
      role: "",
      organization: "",
      email: "",
      notes: "",
    });
  };

  const handleSubmit = () => {
    // 💾 Here you can save the data, send it to an API, or just display a message
    alert("✅ Intake Submitted! Thank you for completing the survey.");
  };

  const handleStartOver = () => {
    // 💥 Clear the form context and reset to Step 0
    setFormData(initialFormData); // assuming you have a reset state function
    setStepIndex(0);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-6">
      <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-slate-600">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-20">
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center font-bold ${
                stepIndex === index
                  ? "bg-blue-700 text-white"
                  : stepIndex > index
                  ? "bg-green-500 text-white"
                  : "bg-slate-200 text-slate-500"
              }`}
            >
              {index + 1}
            </div>
            <div className="mt-1 text-center break-words">{step}</div>
          </div>
        ))}
      </div>
      ;
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">
          Juvenile Intake Survey
        </h1>

        <div className="mb-4">
          <p className="text-lg text-slate-600">
            Step {stepIndex + 1} of {steps.length} —{" "}
            <span className="font-medium">{steps[stepIndex]}</span>
          </p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg border border-slate-200 min-h-[300px] mb-6">
          {/* Form Fields for Youth Information */}
          {stepIndex === 0 && (
            <form className="grid gap-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-sm text-slate-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-blue-500"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm text-slate-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-sm text-slate-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData({ ...formData, dob: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm text-slate-700 mb-1">
                    Gender Identity
                  </label>
                  <select
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nonbinary">Non-binary</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-sm text-slate-700 mb-1">
                    Race / Ethnicity
                  </label>
                  <select
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    value={formData.raceEthnicity}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        raceEthnicity: e.target.value,
                      })
                    }
                  >
                    <option value="">Select</option>
                    <option value="black">Black / African American</option>
                    <option value="white">White</option>
                    <option value="hispanic">Hispanic / Latino</option>
                    <option value="native">Native American</option>
                    <option value="asian">Asian / Pacific Islander</option>
                    <option value="mixed">Mixed</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-sm text-slate-700 mb-1">
                    Grade Level
                  </label>
                  <select
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    value={formData.gradeLevel}
                    onChange={(e) =>
                      setFormData({ ...formData, gradeLevel: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    {Array.from({ length: 13 }, (_, i) => (
                      <option key={i} value={i}>
                        {i === 0 ? "Kindergarten" : `Grade ${i}`}
                      </option>
                    ))}
                    <option value="ged">GED Program</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-sm text-slate-700 mb-1">
                    Primary Language
                  </label>
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    placeholder="English"
                    value={formData.language}
                    onChange={(e) =>
                      setFormData({ ...formData, language: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm text-slate-700 mb-1">
                    Current School
                  </label>
                  <input
                    type="text"
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    placeholder="Springdale Middle School"
                    value={formData.school}
                    onChange={(e) =>
                      setFormData({ ...formData, school: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-sm text-slate-700 mb-1">
                    Intake Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    value={formData.intakeDate}
                    onChange={(e) =>
                      setFormData({ ...formData, intakeDate: e.target.value })
                    }
                  />
                </div>
              </div>
            </form>
          )}

          {/* Step 2: Offense & Risk */}
          {stepIndex === 1 && (
            <form className="grid gap-6">
              <div>
                <label className="block font-medium text-sm text-slate-700 mb-1">
                  Referral Type
                </label>
                <select
                  className="w-full border border-slate-300 rounded px-3 py-2"
                  value={formData.referralType}
                  onChange={(e) =>
                    setFormData({ ...formData, referralType: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="arrest">Arrest</option>
                  <option value="citation">Citation</option>
                  <option value="school-referral">School Referral</option>
                  <option value="probation-violation">
                    Probation Violation
                  </option>
                  <option value="self-report">Self Report</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-sm text-slate-700 mb-1">
                  Primary Offense
                </label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded px-3 py-2"
                  placeholder="E.g., Theft, Assault, Truancy..."
                  value={formData.offense}
                  onChange={(e) =>
                    setFormData({ ...formData, offense: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block font-medium text-sm text-slate-700 mb-1">
                  Offense Date
                </label>
                <input
                  type="date"
                  className="w-full border border-slate-300 rounded px-3 py-2"
                  value={formData.offenseDate}
                  onChange={(e) =>
                    setFormData({ ...formData, offenseDate: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block font-medium text-sm text-slate-700 mb-1">
                  Severity
                </label>
                <select
                  className="w-full border border-slate-300 rounded px-3 py-2"
                  value={formData.severity}
                  onChange={(e) =>
                    setFormData({ ...formData, severity: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                  <option value="violent">Violent / Felony-Level</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-sm text-slate-700 mb-1">
                  Risk Score (SAVRY / RAI / Local Tool)
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  placeholder="Enter 0 - 100"
                  className="w-full border border-slate-300 rounded px-3 py-2"
                  value={formData.riskScore}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      riskScore: Number(e.target.value),
                    })
                  }
                />
                <p className="text-sm text-slate-500 mt-1">
                  Use your jurisdiction preferred tool to assess.
                </p>
              </div>

              <div>
                <label className="block font-medium text-sm text-slate-700 mb-1">
                  Risk Assessment Tool Used
                </label>
                <select
                  className="w-full border border-slate-300 rounded px-3 py-2"
                  value={formData.riskToolUsed}
                  onChange={(e) =>
                    setFormData({ ...formData, riskToolUsed: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="SAVRY">SAVRY</option>
                  <option value="RAI">RAI</option>
                  <option value="YASI">YASI</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </form>
          )}

          {/* Step 3: Contacts & Stakeholders */}
          {stepIndex === 2 && (
            <form className="grid gap-6">
              <div>
                <p className="text-slate-600 mb-2">
                  Add individuals involved in the youth&apos;s case. You can
                  include guardians, legal contacts, school staff, and treatment
                  providers.
                </p>

                <div className="grid gap-4 border border-slate-200 rounded p-4 bg-white shadow">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Contact Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-slate-300 rounded px-3 py-2"
                        placeholder="Jane Smith"
                        value={contactInput.name}
                        onChange={(e) =>
                          setContactInput({
                            ...contactInput,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Role / Relationship
                      </label>
                      <select
                        className="w-full border border-slate-300 rounded px-3 py-2"
                        value={contactInput.role}
                        onChange={(e) =>
                          setContactInput({
                            ...contactInput,
                            role: e.target.value,
                          })
                        }
                      >
                        <option value="">Select</option>
                        <option value="guardian">Guardian</option>
                        <option value="therapist">Therapist</option>
                        <option value="probation-officer">
                          Probation Officer
                        </option>
                        <option value="judge">Judge</option>
                        <option value="attorney">Attorney</option>
                        <option value="caseworker">Caseworker</option>
                        <option value="school-staff">
                          School Counselor / Teacher
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Organization / Agency
                      </label>
                      <input
                        type="text"
                        className="w-full border border-slate-300 rounded px-3 py-2"
                        placeholder="DHS, ABC School, Pulaski Court"
                        value={contactInput.organization}
                        onChange={(e) =>
                          setContactInput({
                            ...contactInput,
                            organization: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        className="w-full border border-slate-300 rounded px-3 py-2"
                        placeholder="name@example.com"
                        value={contactInput.email}
                        onChange={(e) =>
                          setContactInput({
                            ...contactInput,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Notes / Involvement
                    </label>
                    <textarea
                      rows={3}
                      className="w-full border border-slate-300 rounded px-3 py-2"
                      placeholder="How is this person involved in the youth's care or supervision?"
                      value={contactInput.notes}
                      onChange={(e) =>
                        setContactInput({
                          ...contactInput,
                          notes: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="text-right">
                    <div className="text-right">
                      <button
                        type="button"
                        onClick={handleAddContact}
                        className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded"
                      >
                        + Add Contact
                      </button>
                    </div>

                    {/* 👇 Add this right after the button! */}
                    {formData.contacts.length > 0 && (
                      <div className="mt-6 border-t pt-4">
                        <h3 className="text-md font-semibold text-slate-700 mb-2">
                          Added Contacts:
                        </h3>
                        <ul className="space-y-1 text-sm text-slate-600 list-disc list-inside">
                          {formData.contacts.map((c, i) => (
                            <li key={i}>
                              <strong>{c.name}</strong> – {c.role}
                              {c.organization && ` @ ${c.organization}`}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          )}

          {/* Step 4: Educational Information & Support Needs */}
          {stepIndex === 3 && (
            <form className="grid gap-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Current School Status
                  </label>
                  <select
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    value={formData.schoolStatus}
                    onChange={(e) =>
                      setFormData({ ...formData, schoolStatus: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="enrolled">Enrolled</option>
                    <option value="suspended">Suspended</option>
                    <option value="expelled">Expelled</option>
                    <option value="withdrawn">Withdrawn</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Grade Level
                  </label>
                  <select
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    value={formData.gradeLevel}
                    onChange={(e) =>
                      setFormData({ ...formData, gradeLevel: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    {Array.from({ length: 13 }, (_, i) => (
                      <option key={i} value={i}>
                        {i === 0 ? "Kindergarten" : `Grade ${i}`}
                      </option>
                    ))}
                    <option value="ged">GED Program</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Has an IEP or 504 Plan?
                  </label>
                  <select
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    value={formData.hasIEP504}
                    onChange={(e) =>
                      setFormData({ ...formData, hasIEP504: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="iep">Yes, IEP</option>
                    <option value="504">Yes, 504 Plan</option>
                    <option value="both">Both</option>
                    <option value="no">No</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Credits Earned (Estimate)
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={30}
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    placeholder="e.g., 12"
                    value={formData.estimatedCredits}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        estimatedCredits: Number(e.target.value),
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Truancy or Attendance Concerns
                </label>
                <textarea
                  rows={3}
                  className="w-full border border-slate-300 rounded px-3 py-2"
                  placeholder="E.g., missed 20+ days this year, frequently late, etc."
                  value={formData.truancyNotes}
                  onChange={(e) =>
                    setFormData({ ...formData, truancyNotes: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Learning Style / Support Needs
                </label>
                <textarea
                  rows={3}
                  className="w-full border border-slate-300 rounded px-3 py-2"
                  placeholder="E.g., visual learner, needs quiet space, struggles with reading comprehension..."
                  value={formData.learningStyleNotes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      learningStyleNotes: e.target.value,
                    })
                  }
                />
              </div>
            </form>
          )}

          {/* Step 5: Decision Path & Recommendation */}
          {stepIndex === 4 && (
            <form className="grid gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Based on Intake Data, What Path is Recommended?
                </label>
                <select
                  className="w-full border border-slate-300 rounded px-3 py-2"
                  value={formData.recommendation}
                  onChange={(e) =>
                    setFormData({ ...formData, recommendation: e.target.value })
                  }
                >
                  <option value="">Select Recommendation</option>
                  <option value="diversion">Diversion Program</option>
                  <option value="probation">Community Probation</option>
                  <option value="state-custody">
                    State Custody / Commitment
                  </option>
                  <option value="detention">
                    Short-Term Detention (Up to 90 Days)
                  </option>
                  <option value="undecided">
                    Undecided / Awaiting Evaluation
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Justification for Recommendation
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-slate-300 rounded px-3 py-2"
                  placeholder="Explain factors such as risk score, severity of offense, family support, school engagement..."
                  value={formData.recommendationReason}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      recommendationReason: e.target.value,
                    })
                  }
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Is Victim Restitution Needed?
                  </label>
                  <select
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    value={formData.restitution}
                    onChange={(e) =>
                      setFormData({ ...formData, restitution: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Next Court Date (if applicable)
                  </label>
                  <input
                    type="date"
                    className="w-full border border-slate-300 rounded px-3 py-2"
                    value={formData.courtDate}
                    onChange={(e) =>
                      setFormData({ ...formData, courtDate: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Notes or Conditions to Include
                </label>
                <textarea
                  rows={3}
                  className="w-full border border-slate-300 rounded px-3 py-2"
                  placeholder="e.g., complete anger management course, attend weekly mentoring program..."
                  value={formData.recommendationNotes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      recommendationNotes: e.target.value,
                    })
                  }
                />
              </div>
            </form>
          )}

          {/* Step 6: Final Review & Submission */}
          {stepIndex === 5 && (
            <div className="grid gap-6">
              <h2 className="text-xl font-semibold text-blue-800">
                🎉 Review Complete — Let’s Wrap This Journey
              </h2>

              <div className="bg-white border border-slate-200 shadow rounded p-4 space-y-4">
                <p className="text-slate-600">
                  You’ve completed all steps of the intake. Please take a moment
                  to review your entries and ensure everything is accurate.
                </p>
                <ul className="text-sm text-slate-700 list-disc list-inside space-y-2">
                  <li>
                    <strong>Youth:</strong> {formData.firstName}{" "}
                    {formData.lastName}, Grade {formData.gradeLevel},{" "}
                    {formData.hasIEP504 === "no"
                      ? "No IEP/504"
                      : formData.hasIEP504}
                  </li>
                  <li>
                    <strong>Referral:</strong> {formData.referralType} —{" "}
                    {formData.offense}
                  </li>
                  <li>
                    <strong>Offense Date:</strong> {formData.offenseDate}
                  </li>
                  <li>
                    <strong>Risk Assessment:</strong> {formData.riskToolUsed},
                    Score: {formData.riskScore}
                  </li>
                  <li>
                    <strong>Recommendation:</strong> {formData.recommendation} —{" "}
                    {formData.recommendationReason}
                  </li>
                  <li>
                    <strong>Contacts:</strong>{" "}
                    {formData.contacts.length > 0
                      ? formData.contacts.map((c) => c.role).join(", ")
                      : "None Added"}
                  </li>
                  <li>
                    <strong>Next Court Date:</strong>{" "}
                    {formData.courtDate || "Not scheduled"}
                  </li>
                  <li>
                    <strong>Restitution Needed:</strong> {formData.restitution}
                  </li>
                  <li>
                    <strong>Notes:</strong> {formData.recommendationNotes}
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-4 mt-6">
                <button
                  onClick={handleSubmit}
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded text-sm font-semibold w-full sm:w-auto"
                >
                  ✅ Confirm & Submit
                </button>

                <button
                  onClick={() => generatePdf(formData)}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded text-sm font-semibold w-full sm:w-auto"
                >
                  📄 Download PDF
                </button>

                <button
                  onClick={handleStartOver}
                  className="bg-slate-300 hover:bg-slate-400 text-slate-800 px-6 py-3 rounded text-sm font-semibold w-full sm:w-auto"
                >
                  🔁 Start Over
                </button>
              </div>

              <p className="text-center text-slate-500 text-xs mt-6">
                Thank you for advocating with integrity and empathy.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={back}
            disabled={stepIndex === 0}
            className="px-4 py-2 bg-slate-200 text-slate-700 rounded hover:bg-slate-300 disabled:opacity-40"
          >
            ⬅ Back
          </button>

          {stepIndex < steps.length - 1 ? (
            <button
              onClick={next}
              className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
            >
              Next ➡
            </button>
          ) : (
            <button
              onClick={() => alert("🎉 Ready to review & generate output!")}
              className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
            >
              ✅ Finish
            </button>
          )}
        </div>
      </div>
      <footer className="text-center text-sm text-slate-500 mt-12 py-6 border-t border-slate-200">
        <p>
          Built independently by <strong>Darian Ross</strong> — IT Support,
          Arkansas DHS.
        </p>
        <p>
          Inspired by the mission and practices of the{" "}
          <a
            href="https://humanservices.arkansas.gov/divisions-shared-services/youth-services/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Division of Youth Services
          </a>{" "}
          and juvenile justice reform across the region.
        </p>
        <p className="mt-2">
          This application is not an official DHS product and is offered as an
          open-source civic tech prototype.
        </p>
      </footer>
    </main>
  );
}
