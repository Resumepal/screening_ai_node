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
 * @interface PlatformUserJwtResponseDto
 */
export interface PlatformUserJwtResponseDto {
    /**
     * JWT Token
     * @type {string}
     * @memberof PlatformUserJwtResponseDto
     */
    jwt: string;
}

/**
 * Check if a given object implements the PlatformUserJwtResponseDto interface.
 */
export function instanceOfPlatformUserJwtResponseDto(value: object): value is PlatformUserJwtResponseDto {
    if (!('jwt' in value) || value['jwt'] === undefined) return false;
    return true;
}

export function PlatformUserJwtResponseDtoFromJSON(json: any): PlatformUserJwtResponseDto {
    return PlatformUserJwtResponseDtoFromJSONTyped(json, false);
}

export function PlatformUserJwtResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlatformUserJwtResponseDto {
    if (json == null) {
        return json;
    }
    return {
        
        'jwt': json['jwt'],
    };
}

export function PlatformUserJwtResponseDtoToJSON(json: any): PlatformUserJwtResponseDto {
    return PlatformUserJwtResponseDtoToJSONTyped(json, false);
}

export function PlatformUserJwtResponseDtoToJSONTyped(value?: PlatformUserJwtResponseDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'jwt': value['jwt'],
    };
}

