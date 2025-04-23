// src/components/voices-tool/Forms/ProbationIntakeForm.tsx

"use client";

export default function ProbationIntakeForm() {
  return (
    <div className="p-4 bg-white rounded shadow border">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">
        Probation Intake Form
      </h3>
      <p className="text-gray-600">
        This form gathers youth info after court disposition. It includes
        supervision eligibility, family circumstances, and referral to any
        required community supports.
      </p>
    </div>
  );
}
