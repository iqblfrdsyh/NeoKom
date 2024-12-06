import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaCheck } from "react-icons/fa";
import { FiFileText, FiUpload } from "react-icons/fi";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogContents } from "../dialogContent/dialogContent";

const Tables = {
  TableDaftarTugas: ({ tasks }) => {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama Tugas</TableHead>
            <TableHead className="text-center">Deadline</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-black">
          {tasks.map((task, index) => (
            <TableRow key={index}>
              <TableCell className="py-3">{task.name}</TableCell>
              <TableCell className="text-center py-3">
                {task.deadline}
              </TableCell>
              <TableCell className="text-center py-3">
                {task.isCompleted ? (
                  <span className="text-green-500">{task.status}</span>
                ) : (
                  <span className="text-red-500">{task.status}</span>
                )}
              </TableCell>
              <TableCell className="flex gap-4 justify-center items-center py-3">
                {task.isCompleted ? (
                  <FaCheck className="text-green-500" size={20} />
                ) : (
                  <>
                    {/* Dialog "Detail Tugas" */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex items-center px-3 py-2 bg-[#0A355D] text-white rounded hover:bg-[#0a355de7]">
                          <FiFileText size={16} className="mr-2" />
                          Detail Tugas
                        </button>
                      </DialogTrigger>
                      <DialogContent className="text-black">
                        <DialogContents.Content1 task={task} />
                      </DialogContent>
                    </Dialog>

                    {/* Dialog "Upload Disini" */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex items-center px-3 py-2 bg-[#0A355D] text-white rounded hover:bg-[#0a355de7]">
                          <FiUpload size={16} className="mr-2" />
                          Upload Disini
                        </button>
                      </DialogTrigger>
                      <DialogContent className="text-black">
                        <DialogContents.Content2 task={task} />
                      </DialogContent>
                    </Dialog>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
  TableRiwayat: ({ histories }) => {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama Tugas</TableHead>
            <TableHead className="text-center">Tanggal Kirim</TableHead>
            <TableHead className="text-center">Waktu Kirim</TableHead>
            <TableHead className="text-center">Nilai</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-black">
          {histories.map((history, index) => (
            <TableRow key={index}>
              <TableCell className="py-3">{history.assignment}</TableCell>
              <TableCell className="text-center py-3">{history.date}</TableCell>
              <TableCell className="text-center py-3">{history.time}</TableCell>
              <TableCell
                className={`flex gap-4 justify-center items-center py-3 font-semibold ${
                  history.grade > 77
                    ? "text-green-500"
                    : history.grade >= 60
                    ? "text-orange-500"
                    : "text-red-500"
                }`}
              >
                {history.grade}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export { Tables };
