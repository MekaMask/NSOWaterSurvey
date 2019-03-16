namespace VarsWebApi.Models {
    export interface FieldSize {
        /**ลักษณะพื้นที่เลี้ยงสัตว์น้ำ */
        Shape: FieldShape;
        /**บ่อหรือร่องสวน  พื้นที่ กี่ไร่ กี่งาน  กี่ตารางวา */
        Area: Area;
        /**ความลึกของบ่อกี่เมตร  */
        Depth: number;
        /**ถ้าบ่อเป็นสี่เหลี่ยม กว้าง ยาว ลึกเท่าไร  */
        Rectangle: RectanglePool;
        /**ถ้าบ่อเป็นวงกลม เส้นผ่านศูนย์กลางกี่เมตร ลึก เท่าไร  */
        Diameter: number;
    }
}
