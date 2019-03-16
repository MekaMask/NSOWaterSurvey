namespace VarsWebApi.Models {
    /**การบริหารจัดการน้ำ เพื่อการเกษตร */
    export interface ManagementForFarming {
        /**ในหมู่บ้าน/ชุมชนแห่งนี้มีโครงการจัดการน้้าเพื่อการเกษตรชุมชน โดยใช้พื้นที่สาธารณะหรือไม่ (โครงการที่ใช้งบประมาณจากส่วนท้องถิ่น)   */
        Doing: boolean;

        /**หาก “มี” มีกี่โครงการ */
        ProjectCount: number | null;

        /**จำนวนโครงการการจัดการน้้าเพื่อการเกษตรชุมชน */
        Details: DetailManagementForFarming[];
    }
}