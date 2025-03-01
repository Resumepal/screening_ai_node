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
 * @interface PlatformUserResponseDto
 */
export interface PlatformUserResponseDto {
    /**
     * Platform User ID
     * @type {string}
     * @memberof PlatformUserResponseDto
     */
    platformUserId: string;
    /**
     * Email of the user
     * @type {string}
     * @memberof PlatformUserResponseDto
     */
    email: string;
    /**
     * Time of user creation in ISO Date Time String Format
     * @type {string}
     * @memberof PlatformUserResponseDto
     */
    createdAt: string;
    /**
     * First name of the user
     * @type {string}
     * @memberof PlatformUserResponseDto
     */
    firstName: string;
    /**
     * Last name of the user
     * @type {string}
     * @memberof PlatformUserResponseDto
     */
    lastName: string;
    /**
     * Profile Picture URL of the user
     * @type {string}
     * @memberof PlatformUserResponseDto
     */
    dpUrl: string;
}

/**
 * Check if a given object implements the PlatformUserResponseDto interface.
 */
export function instanceOfPlatformUserResponseDto(value: object): value is PlatformUserResponseDto {
    if (!('platformUserId' in value) || value['platformUserId'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('firstName' in value) || value['firstName'] === undefined) return false;
    if (!('lastName' in value) || value['lastName'] === undefined) return false;
    if (!('dpUrl' in value) || value['dpUrl'] === undefined) return false;
    return true;
}

export function PlatformUserResponseDtoFromJSON(json: any): PlatformUserResponseDto {
    return PlatformUserResponseDtoFromJSONTyped(json, false);
}

export function PlatformUserResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlatformUserResponseDto {
    if (json == null) {
        return json;
    }
    return {
        
        'platformUserId': json['platformUserId'],
        'email': json['email'],
        'createdAt': json['createdAt'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'dpUrl': json['dpUrl'],
    };
}

export function PlatformUserResponseDtoToJSON(json: any): PlatformUserResponseDto {
    return PlatformUserResponseDtoToJSONTyped(json, false);
}

export function PlatformUserResponseDtoToJSONTyped(value?: PlatformUserResponseDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'platformUserId': value['platformUserId'],
        'email': value['email'],
        'createdAt': value['createdAt'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'dpUrl': value['dpUrl'],
    };
}

