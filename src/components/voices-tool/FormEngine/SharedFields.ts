// src/components/voices-tool/FormEngine/SharedFields.ts

export const SharedFields = {
    firstName: {
      type: "text",
      name: "firstName",
      label: "First Name",
      placeholder: "Enter first name",
      validation: { required: true },
      source: "intake",
    },
    lastName: {
      type: "text",
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter last name",
      validation: { required: true },
      source: "intake",
    },
    dateOfBirth: {
      type: "date",
      name: "dateOfBirth",
      label: "Date of Birth",
      placeholder: "MM/DD/YYYY",
      validation: { required: true },
      source: "intake",
    },
    grade: {
      type: "select",
      name: "grade",
      label: "Grade",
      options: [
        { label: "6th", value: "6" },
        { label: "7th", value: "7" },
        { label: "8th", value: "8" },
        { label: "9th", value: "9" },
        { label: "10th", value: "10" },
        { label: "11th", value: "11" },
        { label: "12th", value: "12" },
        { label: "Other", value: "other" }
      ],
      validation: { required: true },
      source: "intake",
    }
  };
  