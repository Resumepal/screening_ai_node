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
 * @interface PlatformCreateScreeningJobDto
 */
export interface PlatformCreateScreeningJobDto {
    /**
     * Screening Template ID
     * @type {string}
     * @memberof PlatformCreateScreeningJobDto
     */
    screeningTemplateId: string;
    /**
     * Screening Job Title
     * @type {string}
     * @memberof PlatformCreateScreeningJobDto
     */
    title: string;
    /**
     * Screening Job Active Status
     * @type {boolean}
     * @memberof PlatformCreateScreeningJobDto
     */
    jobActive: boolean;
    /**
     * Screening Job JD
     * @type {string}
     * @memberof PlatformCreateScreeningJobDto
     */
    jd: string;
    /**
     * Screening Job Upvotes
     * @type {Array<string>}
     * @memberof PlatformCreateScreeningJobDto
     */
    upvotes: Array<string>;
    /**
     * Creation date in ISO Date Time String
     * @type {string}
     * @memberof PlatformCreateScreeningJobDto
     */
    createdAt: string;
}

/**
 * Check if a given object implements the PlatformCreateScreeningJobDto interface.
 */
export function instanceOfPlatformCreateScreeningJobDto(value: object): value is PlatformCreateScreeningJobDto {
    if (!('screeningTemplateId' in value) || value['screeningTemplateId'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('jobActive' in value) || value['jobActive'] === undefined) return false;
    if (!('jd' in value) || value['jd'] === undefined) return false;
    if (!('upvotes' in value) || value['upvotes'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    return true;
}

export function PlatformCreateScreeningJobDtoFromJSON(json: any): PlatformCreateScreeningJobDto {
    return PlatformCreateScreeningJobDtoFromJSONTyped(json, false);
}

export function PlatformCreateScreeningJobDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlatformCreateScreeningJobDto {
    if (json == null) {
        return json;
    }
    return {
        
        'screeningTemplateId': json['screeningTemplateId'],
        'title': json['title'],
        'jobActive': json['jobActive'],
        'jd': json['jd'],
        'upvotes': json['upvotes'],
        'createdAt': json['createdAt'],
    };
}

export function PlatformCreateScreeningJobDtoToJSON(json: any): PlatformCreateScreeningJobDto {
    return PlatformCreateScreeningJobDtoToJSONTyped(json, false);
}

export function PlatformCreateScreeningJobDtoToJSONTyped(value?: PlatformCreateScreeningJobDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'screeningTemplateId': value['screeningTemplateId'],
        'title': value['title'],
        'jobActive': value['jobActive'],
        'jd': value['jd'],
        'upvotes': value['upvotes'],
        'createdAt': value['createdAt'],
    };
}

