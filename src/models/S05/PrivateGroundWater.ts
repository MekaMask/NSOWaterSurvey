namespace VarsWebApi.Models {
    /**บ่อน้ำส่วนตัว */
    export interface PrivateGroundWater extends WaterResourceBase<GroundWaterWell> {
        /**ถ้ามีบ่อน้้าบาดาลส่วนตัว มีจ้านวนกี่บ่อ  */
        AllCount: number;
    }
}
