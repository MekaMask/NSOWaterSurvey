namespace VarsWebApi.Models {
    /**2.8 การเลี้ยงสัตว์เพื่อขายหรือใช้งานเกษตร  */
    export interface Farming {
        /**ในรอบ 12 เดือนที่ผ่านมาครัวเรือนนี้มีการเลี้ยงสัตว์ เพื่อขายหรือใช้งานเกษตรหรือไม่ */
        Doing: boolean;
        // TODO: bool HasXXX, int XXXCount
        /**วัว */
        Cow: HasAndCount;

        /**ควาย */
        Buffalo: HasAndCount;

        /**หมู */
        Pig: HasAndCount;

        /**แพะ */
        Goat: HasAndCount;

        /**แกะ */
        Sheep: HasAndCount;

        /**ไก่ */
        Chicken: HasAndCount;

        /**เป็ด */
        Duck: HasAndCount;
        /**ห่าน */
        Goose: HasAndCount;
        /**ไหม(น้้าหนักรังไหมเป็น กก.) */
        SilkWool: HasAndCount;
        /**อื่นๆ(เช่น ฟาร์มสุนัข แมว กระต่าย หนู นกกระจอกเทศ) */
        Other: HasAndCount;
        OtherName: string;
        /**การเลี้ยงสัตว์นี้ใช้น้้าจากแหล่งใดบ้าง */
        WaterSources: WaterSources;
    }
}