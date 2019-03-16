namespace VarsWebApi.Models {
    export interface DisasterWarningMethod {
        /**2.1 ระบบเป็นไปตามระบบของทางราชการ  */
        GovernmentProcess: boolean;
        /**2.2 มี โดยหมู่บ้าน/ชุมชนร่วมกันวางแผนจัดการเอง */
        CommunityPlan: boolean;
        /**2.3 มี โดยมีหน่วยงานอื่นให้ค้าแนะน้าและบริหารจัดการ */
        ConsultingService: boolean;
        /**2.4 มี ลักษณะการด้าเนินงานอื่น */
        HasOther: boolean;

        /**ระบุลักษณะการดำเนินการมาตรการเตือนภัย */
        Other: string;
    }
}
