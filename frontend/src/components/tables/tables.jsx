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
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { DialogContents } from "../dialogContent/dialogContent";
import { Button } from "../ui/button";
import { formatDate } from "@/lib/utils";

const TableDaftarTugas = ({ tasks, kelas }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Nama Tugas</TableHead>
          <TableHead className="text-center font-bold">Deadline</TableHead>
          <TableHead className="text-center font-bold">Status</TableHead>
          <TableHead className="text-center font-bold">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-black">
        {tasks
          .filter((task) => task.kelas == kelas)
          .map((task, index) => (
            <TableRow key={index + 1}>
              <TableCell className="py-3">{task.title}</TableCell>
              <TableCell className="text-center py-3">
                {formatDate(task.due_date)}
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
};
const TableRiwayat = ({ histories }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Nama Tugas</TableHead>
          <TableHead className="text-center font-bold">Tanggal Kirim</TableHead>
          <TableHead className="text-center font-bold">Waktu Kirim</TableHead>
          <TableHead className="text-center font-bold">Nilai</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-black">
        {histories.map((history, index) => (
          <TableRow key={index + 1}>
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
};
const TableKelolaTugas = ({ assignments,kelas,handleDelete }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Judul Tugas</TableHead>
          <TableHead className="text-center font-bold">
            Deskripsi Tugas
          </TableHead>
          <TableHead className="text-center font-bold">
            Deadline Tugas
          </TableHead>
          <TableHead className="text-center font-bold">Tipe File</TableHead>
          <TableHead className="text-center font-bold">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-black">
        {assignments.filter(asn => asn.kelas == kelas).map((assignment, index) => (
          <TableRow key={index + 1}>
            <TableCell className="py-3">{assignment.title}</TableCell>
            <TableCell className="text-center py-3">
              {assignment.description}
            </TableCell>
            <TableCell className="text-center py-3">
              {formatDate(assignment.due_date)}
            </TableCell>
            <TableCell className="text-center py-3">
              {assignment.file_url.split(".").pop()}
            </TableCell>
            <TableCell className="text-center py-3">
              <Button className="bg-red-500 hover:bg-red-400" onClick={() => handleDelete(assignment.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
const TableKelolaUser = ({ users, handleDeleteUser }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Fullname</TableHead>
          <TableHead className="text-center font-bold">Email</TableHead>
          <TableHead className="text-center font-bold">Password</TableHead>
          <TableHead className="text-center font-bold">Status</TableHead>
          <TableHead className="text-center font-bold">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-black">
        {users.map((user, index) => (
          <TableRow key={index + 1}>
            <TableCell className="py-3">{user.fullName}</TableCell>
            <TableCell className="text-center py-3">{user.email}</TableCell>
            <TableCell className="text-center py-3 text-red-500">
              {user.password && "cannot be seen"}
            </TableCell>
            <TableCell className="text-center py-3">{user.role}</TableCell>
            <TableCell className="text-center py-3">
              <Button
                className="bg-red-500 hover:bg-red-400"
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
const TableTugasSiswa = ({ studentAssignments }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Nama Siswa</TableHead>
          <TableHead className="text-center font-bold">Type File</TableHead>
          <TableHead className="text-center font-bold">Grade</TableHead>
          <TableHead className="text-center font-bold">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-black">
        {studentAssignments.map((SA, index) => (
          <TableRow key={index + 1}>
            <TableCell className="py-3">{SA.fullname}</TableCell>
            <TableCell className="text-center py-3">{SA.filetype}</TableCell>
            <TableCell className="text-center py-3">{SA.grade}</TableCell>
            <TableCell className="text-center py-3">
              <Button className="bg-[#0A355D] hover:bg-[#0a355ddc]">
                Beri Nilai
              </Button>
              <Button className="bg-[#7FB557]" disabled>
                Sudah dinilai
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default {
  TableTugasSiswa,
  TableKelolaUser,
  TableKelolaTugas,
  TableDaftarTugas,
  TableRiwayat,
};
