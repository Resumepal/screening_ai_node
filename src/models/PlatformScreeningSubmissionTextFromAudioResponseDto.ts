/* tslint:disable */
/* eslint-disable */
/**
 * Screening AI API Docs
 * API Documentation for Screening AI
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PlatformScreeningSubmissionTextFromAudioResponseDto
 */
export interface PlatformScreeningSubmissionTextFromAudioResponseDto {
    /**
     * Text from Audio
     * @type {string}
     * @memberof PlatformScreeningSubmissionTextFromAudioResponseDto
     */
    data: string;
    /**
     * Audio Url
     * @type {string}
     * @memberof PlatformScreeningSubmissionTextFromAudioResponseDto
     */
    answerLocation: string;
}

/**
 * Check if a given object implements the PlatformScreeningSubmissionTextFromAudioResponseDto interface.
 */
export function instanceOfPlatformScreeningSubmissionTextFromAudioResponseDto(value: object): value is PlatformScreeningSubmissionTextFromAudioResponseDto {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('answerLocation' in value) || value['answerLocation'] === undefined) return false;
    return true;
}

export function PlatformScreeningSubmissionTextFromAudioResponseDtoFromJSON(json: any): PlatformScreeningSubmissionTextFromAudioResponseDto {
    return PlatformScreeningSubmissionTextFromAudioResponseDtoFromJSONTyped(json, false);
}

export function PlatformScreeningSubmissionTextFromAudioResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlatformScreeningSubmissionTextFromAudioResponseDto {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'],
        'answerLocation': json['answerLocation'],
    };
}

export function PlatformScreeningSubmissionTextFromAudioResponseDtoToJSON(json: any): PlatformScreeningSubmissionTextFromAudioResponseDto {
    return PlatformScreeningSubmissionTextFromAudioResponseDtoToJSONTyped(json, false);
}

export function PlatformScreeningSubmissionTextFromAudioResponseDtoToJSONTyped(value?: PlatformScreeningSubmissionTextFromAudioResponseDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'],
        'answerLocation': value['answerLocation'],
    };
}

