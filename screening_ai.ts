import { Configuration } from "./src/runtime";
import {
  PlatformScreeningJobsApi,
  PlatformScreeningTemplatesApi,
  PlatformScreeningSubmissionsApi,
} from "./src/apis";
import {
  PlatformCreateScreeningJobDto,
  PlatformScreeningJobListResponseDto,
  PlatformScreeningJobResponseDto,
  CreatePlatformScreeningFormSubmissionDto,
  CreatePlatformScreeningSubmissionResponseDto,
  CreatePlatformScreeningSubmissionStreamingRoomTokenDto,
  GetPlatformScreeningSubmissionsOfOrgDto,
  PlatformScreeningSubmissionListResponseDto,
  PlatformScreeningSubmissionResponseDto,
  PlatformScreeningSubmissionTextFromAudioResponseDto,
  UpdatePlatformScreeningSubmissionChatDto,
  UpdatePlatformScreeningSubmissionsStatusDto,
  CreateScreeningTemplateDto,
  GenerateScreeningTemplateQuestionsDto,
  GetAllPlatformScreeningTemplatesOfOrgResponseDto,
  PlatformScreeningSubmissionCreateStreamRoomResponseDto,
} from "./src/models";
import { BaseAPI } from "./src/runtime";

export class ScreeningAI {
  private baseAPI: BaseAPI;
  private screeningJobsApi: PlatformScreeningJobsApi;
  private screeningTemplatesApi: PlatformScreeningTemplatesApi;
  private screeningSubmissionsApi: PlatformScreeningSubmissionsApi;

  constructor(params: { orgApiKey: string; basePath?: string }) {
    const config = new Configuration({
      basePath: params.basePath || "http://localhost:3000",
      apiKey: params.orgApiKey,
    });

    this.baseAPI = new BaseAPI(config);

    this.screeningJobsApi = new PlatformScreeningJobsApi(config);
    this.screeningTemplatesApi = new PlatformScreeningTemplatesApi(config);
    this.screeningSubmissionsApi = new PlatformScreeningSubmissionsApi(config);
  }

  // Screening Jobs API Helpers

  async createScreeningJob(
    platformCreateScreeningJobDto: PlatformCreateScreeningJobDto
  ): Promise<PlatformScreeningJobResponseDto> {
    try {
      const response =
        await this.screeningJobsApi.platformScreeningJobsControllerCreateScreeningJob(
          {
            platformCreateScreeningJobDto,
          }
        );
      return response.data as PlatformScreeningJobResponseDto;
    } catch (error) {
      console.error("Error creating screening job:", error);
      throw new Error("Failed to create screening job");
    }
  }

  async getScreeningJobById(
    screeningJobId: string
  ): Promise<PlatformScreeningJobResponseDto> {
    try {
      const response =
        await this.screeningJobsApi.platformScreeningJobsControllerGetScreeningJobUsingId(
          {
            screeningJobId,
          }
        );
      return response.data as PlatformScreeningJobResponseDto;
    } catch (error) {
      console.error("Error fetching screening job by ID:", error);
      throw new Error("Failed to fetch screening job by ID");
    }
  }

  async getScreeningJobsOfOrg(): Promise<PlatformScreeningJobListResponseDto> {
    try {
      const response =
        await this.screeningJobsApi.platformScreeningJobsControllerGetScreeningJobsOfOrg();
      return response.data as PlatformScreeningJobListResponseDto;
    } catch (error) {
      console.error("Error fetching screening jobs of organization:", error);
      throw new Error("Failed to fetch screening jobs of organization");
    }
  }

  // Screening Templates API Helpers

  async createScreeningTemplate(
    createScreeningTemplateDto: CreateScreeningTemplateDto
  ): Promise<void> {
    try {
      await this.screeningTemplatesApi.platformScreeningTemplatesControllerCreateScreeningTemplate(
        {
          createScreeningTemplateDto,
        }
      );
    } catch (error) {
      console.error("Error creating screening template:", error);
      throw new Error("Failed to create screening template");
    }
  }

  async generateScreeningTemplateQuestions(
    generateScreeningTemplateQuestionsDto: GenerateScreeningTemplateQuestionsDto
  ): Promise<void> {
    try {
      await this.screeningTemplatesApi.platformScreeningTemplatesControllerGenerateScreeningTemplateQuestions(
        {
          generateScreeningTemplateQuestionsDto,
        }
      );
    } catch (error) {
      console.error("Error generating screening template questions:", error);
      throw new Error("Failed to generate screening template questions");
    }
  }

  async getScreeningTemplates(): Promise<GetAllPlatformScreeningTemplatesOfOrgResponseDto> {
    try {
      const response =
        await this.screeningTemplatesApi.platformScreeningTemplatesControllerGetScreeningTemplates();
      return response.data as GetAllPlatformScreeningTemplatesOfOrgResponseDto;
    } catch (error) {
      console.error("Error fetching screening templates:", error);
      throw new Error("Failed to fetch screening templates");
    }
  }

  // Screening Submissions API Helpers

  async convertAudioToText(
    orgId: string,
    screeningSubmissionId: string,
    index: number,
    file: Blob,
    fileType: string
  ): Promise<PlatformScreeningSubmissionTextFromAudioResponseDto> {
    try {
      const response =
        await this.screeningSubmissionsApi.platformScreeningSubmissionsControllerConvertAudioToText(
          {
            orgId,
            screeningSubmissionId,
            index,
            file,
            fileType,
          }
        );
      return response.data as PlatformScreeningSubmissionTextFromAudioResponseDto;
    } catch (error) {
      console.error("Error converting audio to text:", error);
      throw new Error("Failed to convert audio to text");
    }
  }

  async createScreeningStreamRoom(
    createPlatformScreeningSubmissionStreamingRoomTokenDto: CreatePlatformScreeningSubmissionStreamingRoomTokenDto
  ): Promise<PlatformScreeningSubmissionCreateStreamRoomResponseDto> {
    try {
      const response =
        await this.screeningSubmissionsApi.platformScreeningSubmissionsControllerCreateScreeningStreamRoom(
          {
            createPlatformScreeningSubmissionStreamingRoomTokenDto,
          }
        );
      return response.data as PlatformScreeningSubmissionCreateStreamRoomResponseDto;
    } catch (error) {
      console.error("Error creating screening stream room:", error);
      throw new Error("Failed to create screening stream room");
    }
  }

  async createScreeningSubmission(
    createPlatformScreeningFormSubmissionDto: CreatePlatformScreeningFormSubmissionDto
  ): Promise<CreatePlatformScreeningSubmissionResponseDto> {
    try {
      const response =
        await this.screeningSubmissionsApi.platformScreeningSubmissionsControllerCreateScreeningSubmission(
          {
            createPlatformScreeningFormSubmissionDto,
          }
        );
      return response.data as CreatePlatformScreeningSubmissionResponseDto;
    } catch (error) {
      console.error("Error creating screening submission:", error);
      throw new Error("Failed to create screening submission");
    }
  }

  async getScreeningSubmissionById(
    screeningSubmissionId: string
  ): Promise<PlatformScreeningSubmissionResponseDto> {
    try {
      const response =
        await this.screeningSubmissionsApi.platformScreeningSubmissionsControllerGetScreeningSubmissionUsingId(
          {
            screeningSubmissionId,
          }
        );
      return response.data as PlatformScreeningSubmissionResponseDto;
    } catch (error) {
      console.error("Error fetching screening submission by ID:", error);
      throw new Error("Failed to fetch screening submission by ID");
    }
  }

  async getScreeningSubmissionsOfOrg(
    getPlatformScreeningSubmissionsOfOrgDto: GetPlatformScreeningSubmissionsOfOrgDto
  ): Promise<PlatformScreeningSubmissionListResponseDto> {
    try {
      const response =
        await this.screeningSubmissionsApi.platformScreeningSubmissionsControllerGetScreeningSubmissionsOfOrg(
          {
            getPlatformScreeningSubmissionsOfOrgDto,
          }
        );
      return response.data as PlatformScreeningSubmissionListResponseDto;
    } catch (error) {
      console.error(
        "Error fetching screening submissions of organization:",
        error
      );
      throw new Error("Failed to fetch screening submissions of organization");
    }
  }

  async getScreeningSubmissionsByEmailPhone(
    email: string,
    phone: string,
    orgAlias: string,
    jobId: string
  ): Promise<PlatformScreeningSubmissionResponseDto> {
    try {
      const response =
        await this.screeningSubmissionsApi.platformScreeningSubmissionsControllerGetScreeningSubmissionsUsingEmailPhone(
          {
            email,
            phone,
            orgAlias,
            jobId,
          }
        );
      return response.data as PlatformScreeningSubmissionResponseDto;
    } catch (error) {
      console.error(
        "Error fetching screening submissions by email/phone:",
        error
      );
      throw new Error("Failed to fetch screening submissions by email/phone");
    }
  }

  async getScreeningSubmissionsByJobId(
    jobId: string
  ): Promise<PlatformScreeningSubmissionListResponseDto> {
    try {
      const response =
        await this.screeningSubmissionsApi.platformScreeningSubmissionsControllerGetScreeningSubmissionsUsingJobId(
          {
            jobId,
          }
        );
      return response.data as PlatformScreeningSubmissionListResponseDto;
    } catch (error) {
      console.error("Error fetching screening submissions by job ID:", error);
      throw new Error("Failed to fetch screening submissions by job ID");
    }
  }

  async updateScreeningSubmissionChat(
    updatePlatformScreeningSubmissionChatDto: UpdatePlatformScreeningSubmissionChatDto
  ): Promise<void> {
    try {
      await this.screeningSubmissionsApi.platformScreeningSubmissionsControllerUpdateScreeningSubmissionChat(
        {
          updatePlatformScreeningSubmissionChatDto,
        }
      );
    } catch (error) {
      console.error("Error updating screening submission chat:", error);
      throw new Error("Failed to update screening submission chat");
    }
  }

  async updateScreeningSubmissionStatus(
    updatePlatformScreeningSubmissionsStatusDto: UpdatePlatformScreeningSubmissionsStatusDto
  ): Promise<void> {
    try {
      await this.screeningSubmissionsApi.platformScreeningSubmissionsControllerUpdateScreeningSubmissionStatus(
        {
          updatePlatformScreeningSubmissionsStatusDto,
        }
      );
    } catch (error) {
      console.error("Error updating screening submission status:", error);
      throw new Error("Failed to update screening submission status");
    }
  }

  async updateScreeningSubmissionViewStatus(
    screeningSubmissionId: string
  ): Promise<void> {
    try {
      await this.screeningSubmissionsApi.platformScreeningSubmissionsControllerUpdateScreeningSubmissionViewStatus(
        {
          screeningSubmissionId,
        }
      );
    } catch (error) {
      console.error("Error updating screening submission view status:", error);
      throw new Error("Failed to update screening submission view status");
    }
  }
}
