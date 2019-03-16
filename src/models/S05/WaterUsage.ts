namespace VarsWebApi.Models {
    /**การใช้น้ำ */
    export interface WaterUsage extends ModelBase {
        /**น้ำประปา */
        Plumbing: Plumbing;
        /**
         * น้ำบาดาล
         * // TODO:5.3, 5.4, 5.5 ทำใหม่
         */
        GroundWater: GroundWater;
        /**น้ำจากแม่น้ำ / ลำคลอง / แหล่งน้ำสาธารณะ */
        River: River;
        /**น้ำจากสระน้ำ/หนองน้ำ/บึง */
        Pool: Pool;
        /**น้ำจากชลประทาน */
        Irrigation: Irrigation;
        /**น้ำฝนที่กักเก็บไว้ */
        Rain: Rain;

        /**น้ำที่ซื้อมาใช้ */
        Buying: Buying;


    }
}
