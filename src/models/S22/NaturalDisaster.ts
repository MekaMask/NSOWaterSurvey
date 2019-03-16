namespace VarsWebApi.Models {
    export interface NaturalDisaster {
        /**สึนามิ */
        Tsunami: boolean;
        /**ดินโคลนถล่ม */
        LandSlide: boolean;
        /**แผ่นดินไหว */
        Earthquake: boolean;
        /**พายุ */
        Cyclone: boolean;
        /**ไฟป่า */
        ForestFire: boolean;
        /**ภัยแล้ง */
        Drought: boolean;
        /**ภัยหนาว */
        Cold: boolean;
        /**โรคระบาดในมนุษย์ */
        Epidemic: boolean;
        /**แมลง ศัตรูพืช */
        Pest: boolean;
        /**โรคระบาดสัตว์ */
        Epizootics: boolean;
    }
}
