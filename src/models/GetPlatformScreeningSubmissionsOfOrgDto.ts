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
 * @interface GetPlatformScreeningSubmissionsOfOrgDto
 */
export interface GetPlatformScreeningSubmissionsOfOrgDto {
    /**
     * Organisation Alias
     * @type {string}
     * @memberof GetPlatformScreeningSubmissionsOfOrgDto
     */
    orgAlias: string;
    /**
     * Job ID
     * @type {string}
     * @memberof GetPlatformScreeningSubmissionsOfOrgDto
     */
    jobId: string;
    /**
     * Submission Status
     * @type {string}
     * @memberof GetPlatformScreeningSubmissionsOfOrgDto
     */
    status: string;
    /**
     * Start After
     * @type {string}
     * @memberof GetPlatformScreeningSubmissionsOfOrgDto
     */
    startAfter: string;
    /**
     * Limit
     * @type {number}
     * @memberof GetPlatformScreeningSubmissionsOfOrgDto
     */
    limit: number;
}

/**
 * Check if a given object implements the GetPlatformScreeningSubmissionsOfOrgDto interface.
 */
export function instanceOfGetPlatformScreeningSubmissionsOfOrgDto(value: object): value is GetPlatformScreeningSubmissionsOfOrgDto {
    if (!('orgAlias' in value) || value['orgAlias'] === undefined) return false;
    if (!('jobId' in value) || value['jobId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('startAfter' in value) || value['startAfter'] === undefined) return false;
    if (!('limit' in value) || value['limit'] === undefined) return false;
    return true;
}

export function GetPlatformScreeningSubmissionsOfOrgDtoFromJSON(json: any): GetPlatformScreeningSubmissionsOfOrgDto {
    return GetPlatformScreeningSubmissionsOfOrgDtoFromJSONTyped(json, false);
}

export function GetPlatformScreeningSubmissionsOfOrgDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPlatformScreeningSubmissionsOfOrgDto {
    if (json == null) {
        return json;
    }
    return {
        
        'orgAlias': json['orgAlias'],
        'jobId': json['jobId'],
        'status': json['status'],
        'startAfter': json['startAfter'],
        'limit': json['limit'],
    };
}

export function GetPlatformScreeningSubmissionsOfOrgDtoToJSON(json: any): GetPlatformScreeningSubmissionsOfOrgDto {
    return GetPlatformScreeningSubmissionsOfOrgDtoToJSONTyped(json, false);
}

export function GetPlatformScreeningSubmissionsOfOrgDtoToJSONTyped(value?: GetPlatformScreeningSubmissionsOfOrgDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'orgAlias': value['orgAlias'],
        'jobId': value['jobId'],
        'status': value['status'],
        'startAfter': value['startAfter'],
        'limit': value['limit'],
    };
}

