namespace VarsWebApi.Models {
    /**ตำแหน่ง ที่ตั้ง */
    export interface Location {
        /**จังหวัด */
        Province: string;

        /**อำเภอ */
        District: string;

        /**ตำบล */
        SubDistrict: string;
    }
}