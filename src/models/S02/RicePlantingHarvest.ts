namespace VarsWebApi.Models {
    /**ข้อมูลการทำนาแต่ละครั้ง */
    export interface RicePlantingHarvest {
        /**การทำนา เริ่มทำเดือนใด    */
        PlantingFromMonth: number;
        /**การทำนา ทำถึงเดือนใด    */
        PlantingThruMonth: number;
        /**การทำนา ปล่อยน้้าเข้านากี่ครั้ง (ถ้าไม่ได้ปล่อยน้ำให้กรอก 0) */
        WaterFillingCount: number;
        /**การทำนา โดยเฉลี่ยแต่ละครั้งปล่อยน้้าสูง กี่ เซนติเมตร */
        WaterHeightCm: number;
    }
}