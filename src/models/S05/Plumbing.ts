namespace VarsWebApi.Models {
    /**น้ำประปา  */
    export interface Plumbing {
        /**
         * น้้าประปานครหลวงDoingMWA
         */
        MWA: PlumbingInfo;
        /**น้้าประปาส่วนภูมิภาค  */
        PWA: PlumbingInfo;
        /**น้้าประปาอื่น ๆ (หมู่บ้าน,อบต.,เทศบาล,ชุมชน, นิคม, ภูเขา, ฯลฯ)   */
        // TODO:Name
        Other: PlumbingInfo;


        /**ใช้น้้าเพื่อท้ากิจกรรมใดบ้างคิดเป็นสัดส่วนเท่าไร(นครหลวง)    */
        WaterActivityMWA: WaterActivity;

        /**ใช้น้้าเพื่อท้ากิจกรรมใดบ้างคิดเป็นสัดส่วนเท่าไร(น้้ำประปาส่วนภมูิภาค)    */
        WaterActivityPWA: WaterActivity;

        /**ใช้น้้าเพื่อท้ากิจกรรมใดบ้างคิดเป็นสัดส่วนเท่าไร(น้ำประปาอื่น ๆ)    */
        WaterActivityOther: WaterActivity;



        /**ในรอบ 12 เดือนที่ผ่านมา มีเหตุการณ์ที่น้ำประปาไม่ไหล ติดต่อกันเกิน 3 วันหรือไม่    */
        HasWaterNotRunning: boolean;
        /**ถ้ามีเกิดเหตุการณ์ลักษณะนี้เป็นเวลากี่เดือน  */
        WaterNotRunningCount: number;
    }
}