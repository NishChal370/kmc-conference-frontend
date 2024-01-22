// interface IApprovalStatusBadge {
//       label: string;
//       status: "accept" | "reject" | "pending";
// }

function ApprovalStatusBadge() {
      return <p className="bg-green-950/5 rounded-sm px-2 py-0.5 text-green-950 tracking-wider">Accepted</p>;
}

export default ApprovalStatusBadge;
