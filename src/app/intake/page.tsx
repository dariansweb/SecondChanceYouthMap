"use client";

import { useState } from "react";

const steps = [
  "Youth Information",
  "Offense & Risk",
  "Contacts & Stakeholders",
  "Education",
  "Decision Path",
  "Review & Submit",
];

export default function IntakePage() {
  const [stepIndex, setStepIndex] = useState(0);

  const next = () =>
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  const back = () => setStepIndex((prev) => Math.max(prev - 1, 0));

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-6">
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
          {/* Replace with form fields */}
          <p className="text-slate-500 italic">
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
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-sm text-slate-700 mb-1">
                      Gender Identity
                    </label>
                    <select className="w-full border border-slate-300 rounded px-3 py-2">
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
                    <select className="w-full border border-slate-300 rounded px-3 py-2">
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
                    <select className="w-full border border-slate-300 rounded px-3 py-2">
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
                  <select className="w-full border border-slate-300 rounded px-3 py-2">
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
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm text-slate-700 mb-1">
                    Offense Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-slate-300 rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm text-slate-700 mb-1">
                    Severity
                  </label>
                  <select className="w-full border border-slate-300 rounded px-3 py-2">
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
                  />
                  <p className="text-sm text-slate-500 mt-1">
                    Use your jurisdiction preferred tool to assess.
                  </p>
                </div>

                <div>
                  <label className="block font-medium text-sm text-slate-700 mb-1">
                    Risk Assessment Tool Used
                  </label>
                  <select className="w-full border border-slate-300 rounded px-3 py-2">
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
                    Add individuals involved in the youths case. You can
                    include guardians, legal contacts, school staff, and
                    treatment providers.
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
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Role / Relationship
                        </label>
                        <select className="w-full border border-slate-300 rounded px-3 py-2">
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
                      />
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
                    <select className="w-full border border-slate-300 rounded px-3 py-2">
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
                    <select className="w-full border border-slate-300 rounded px-3 py-2">
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
                    <select className="w-full border border-slate-300 rounded px-3 py-2">
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
                  <select className="w-full border border-slate-300 rounded px-3 py-2">
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
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Is Victim Restitution Needed?
                    </label>
                    <select className="w-full border border-slate-300 rounded px-3 py-2">
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
                  />
                </div>
              </form>
            )}
          </p>
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
                    <strong>Youth:</strong> John Doe, Grade 9, IEP present
                  </li>
                  <li>
                    <strong>Referral:</strong> School Referral for Disorderly
                    Conduct
                  </li>
                  <li>
                    <strong>Risk Assessment:</strong> SAVRY, Score: 34
                    (Moderate)
                  </li>
                  <li>
                    <strong>Recommendation:</strong> Diversion — Teen Court +
                    Counseling
                  </li>
                  <li>
                    <strong>Contacts:</strong> Guardian, Probation Officer,
                    Therapist
                  </li>
                  <li>
                    <strong>Next Court Date:</strong> May 27, 2025
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 justify-center mt-6">
                <button
                  onClick={() => alert("🚀 Intake Submitted!")}
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded"
                >
                  ✅ Confirm & Submit
                </button>

                <button
                  onClick={() => alert("📄 PDF generated!")}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded"
                >
                  📄 Download PDF
                </button>

                <button
                  onClick={() => alert("📝 Returning to Step 1")}
                  className="bg-slate-300 hover:bg-slate-400 text-slate-800 px-6 py-2 rounded"
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
    </main>
  );
}
