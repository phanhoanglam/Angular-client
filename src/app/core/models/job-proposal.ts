export class JobProposal {
    jobId: number;
    attachments: Attachments;
    message: string;
}

export class Attachments{
    cv: CvJobProposal;
}

export class CvJobProposal {
    name: string;
    url: string;
}

// export class ResponseJobProposal{
//     status: boolean;
//     data: {
//         message: string;
//     };
//     code: string;
// }