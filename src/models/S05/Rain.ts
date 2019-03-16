namespace VarsWebApi.Models {
    /**การกักเก็บน้าฝน ***แสดงข้อมูล ชนิดพืช/การผลิต/การบริการ ที่เลือกใช้น้าฝนที่กักเก็บไว้  */
    export interface Rain {
        /**- ภาชนะกักเก็บ */
        RainContainers: RainContainer[];

        /**- กิจกรรมการใช้น้า */
        // TODO: Type
        WaterActivities: WaterActivity;

    }
}