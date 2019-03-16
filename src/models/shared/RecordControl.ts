namespace VarsWebApi.Models {
    /**Record Control for Manage the Sample Record */
    export interface RecordControl {
        CreatedDateTime: Date | string;
        LastModified: Date | string;
        DeletedDateTime: Date | string | null;
        LastUpload: Date | string | null;
        LastDownload: Date | string | null;
        Logs: RecordControlLog[];
    }
}
