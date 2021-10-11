import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ConvertToSpacesPipe'
})
export class convertToSpacesPipe implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
} 