namespace VarsWebApi.Models {
    /**แหล่งน้ำที่นำมาใช้ 8 ตัว ไม่มีน้ำฝนธรรมชาติ */
    export interface WaterSources {
        /**1. น้ำประปา */
        Plumbing: boolean;
        /**2. น้ำบาดาล */
        UnderGround: boolean;
        /**3. น้ำจากสระน้ำ */
        Pool: boolean;
        /**4. น้ำจากแม่น้ำ / ลำคลอง / แหล่งน้ำสาธารณะ */
        River: boolean;
        /**5. น้ำจากชลประทาน */
        Irrigation: boolean;
        /**6. น้ำฝนที่กักเก็บไว้ */
        Rain: boolean;
        /**7. น้ำที่ซื้อมาใช้ */
        Buying: boolean;
        /**8. น้ำฝนตามธรรมชาติ */
        RainingAsIs: boolean;
        /**9. อื่น ๆ (ระบุ) */
        HasOther: boolean;
        Other: string;
    }
}
