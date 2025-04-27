// src/utils/flowToJuvenileMapping.ts

export const flowToJuvenileMappings = {
    "intake-officer-flow": {
      firstName: "firstName",
      lastName: "lastName",
      dob: "dob",
      intakeDate: "intakeDate",
      county: "county",
      offense: "offense",
      referralType: "referralType",
      school: "school",
      guardianName: "guardianName",
      guardianRelationship: "guardianRelationship"
    },
    "probation-officer-flow": {
      probationOfficerName: "probationOfficerName",
      diversionEligible: "diversionEligible",
      courtDates: "courtDates",
      placementStatus: "placementStatus"
    },
    "defense-flow": {
      defenseCounselName: "guardianName",
      defenseCounselPhone: "phone",
      region: "region"
    },
    "educator-flow": {
      schoolStatus: "schoolStatus",
      hasIEP504: "hasIEP504",
      estimatedCredits: "estimatedCredits",
      truancyNotes: "truancyNotes",
      learningStyleNotes: "learningStyleNotes",
      schoolContact: "schoolContact"
    },
    "mental-health-flow": {
      mentalHealthNeeds: "mentalHealthNeeds",
      evalsPsychological: "evals.psychological",
      evalsSubstance: "evals.substance",
      evalsFamily: "evals.family"
    },
    "prosecutor-flow": {
      recommendation: "recommendation",
      recommendationReason: "recommendationReason",
      restitution: "restitution",
      courtDate: "courtDate"
    },
    // Add others as needed...
  };
  