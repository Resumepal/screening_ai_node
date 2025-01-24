
# ScreeningAI Client SDK

The `ScreeningAI` client SDK is a powerful and user-friendly TypeScript library designed to interact with the ScreeningAI platform. It provides seamless integration with APIs for managing screening jobs, templates, and submissions, making it easy to build and scale HR and talent management solutions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
  - [Screening Jobs API](#screening-jobs-api)
  - [Screening Templates API](#screening-templates-api)
  - [Screening Submissions API](#screening-submissions-api)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Screening Jobs Management**: Create, retrieve, and manage screening jobs for your organization.
- **Screening Templates**: Design and manage reusable screening templates.
- **Screening Submissions**: Manage submissions, convert audio to text, and create stream rooms for live interviews.
- **Built-in Error Handling**: Clear error messages and exceptions for a smooth developer experience.

---

## Installation

Install the library via npm or yarn:

```bash
npm install screening-ai-sdk
```

or

```bash
yarn add screening-ai-sdk
```

---

## Getting Started

Follow these steps to set up and use the ScreeningAI client in your project:

### 1. Import the SDK

```typescript
import { ScreeningAI } from "screening-ai-sdk";
```

### 2. Initialize the Client

Create an instance of the `ScreeningAI` class with your API key:

```typescript
const screeningAI = new ScreeningAI({
  orgApiKey: "your-organization-api-key",
  basePath: "https://api.your-screening-platform.com", // Optional, defaults to an empty string
});
```

### 3. Use the API Methods

Example: Creating a screening job.

```typescript
import { PlatformCreateScreeningJobDto } from "screening-ai-sdk/src/models";

const newJob: PlatformCreateScreeningJobDto = {
  title: "Software Engineer Screening",
  description: "Screening job for evaluating software engineering candidates",
  // Add other required fields here
};

async function createJob() {
  try {
    const job = await screeningAI.createScreeningJob(newJob);
    console.log("Created Job:", job);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

createJob();
```

---

## API Documentation

### Screening Jobs API

#### Create a Screening Job
```typescript
screeningAI.createScreeningJob(platformCreateScreeningJobDto: PlatformCreateScreeningJobDto): Promise<PlatformScreeningJobResponseDto>
```
Creates a new screening job.

#### Get a Screening Job by ID
```typescript
screeningAI.getScreeningJobById(screeningJobId: string): Promise<PlatformScreeningJobResponseDto>
```
Fetches details of a screening job using its ID.

#### Get All Screening Jobs of an Organization
```typescript
screeningAI.getScreeningJobsOfOrg(): Promise<PlatformScreeningJobListResponseDto>
```
Retrieves a list of all screening jobs associated with your organization.

---

### Screening Templates API

#### Create a Screening Template
```typescript
screeningAI.createScreeningTemplate(createScreeningTemplateDto: CreateScreeningTemplateDto): Promise<void>
```
Creates a reusable template for screening.

#### Generate Questions for a Template
```typescript
screeningAI.generateScreeningTemplateQuestions(generateScreeningTemplateQuestionsDto: GenerateScreeningTemplateQuestionsDto): Promise<void>
```
Generates a list of questions based on the template.

#### Get All Screening Templates
```typescript
screeningAI.getScreeningTemplates(): Promise<GetAllPlatformScreeningTemplatesOfOrgResponseDto>
```
Fetches all templates associated with your organization.

---

### Screening Submissions API

#### Convert Audio to Text
```typescript
screeningAI.convertAudioToText(
  orgId: string,
  screeningSubmissionId: string,
  index: number,
  file: Blob,
  fileType: string
): Promise<PlatformScreeningSubmissionTextFromAudioResponseDto>
```
Converts an audio file to text for a specific submission.

#### Create a Screening Submission
```typescript
screeningAI.createScreeningSubmission(createPlatformScreeningFormSubmissionDto: CreatePlatformScreeningFormSubmissionDto): Promise<CreatePlatformScreeningSubmissionResponseDto>
```
Creates a new screening submission.

#### Get Screening Submissions of an Organization
```typescript
screeningAI.getScreeningSubmissionsOfOrg(getPlatformScreeningSubmissionsOfOrgDto: GetPlatformScreeningSubmissionsOfOrgDto): Promise<PlatformScreeningSubmissionListResponseDto>
```
Fetches submissions for the organization.

---

## Error Handling

All methods in the SDK provide built-in error handling. Errors are logged to the console with a descriptive message. Example:

```typescript
try {
  const job = await screeningAI.createScreeningJob(newJob);
} catch (error) {
  console.error("Error creating screening job:", error.message);
}
```

---

## Contributing

We welcome contributions! Please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
