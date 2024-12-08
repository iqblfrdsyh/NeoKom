import DateTimeInput from "../inputDatetime/inputDatetime";
import InputFile from "../inputFile/inputFile";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const Forms = {
  FormKelolaTugas: ({
    title,
    setTitle,
    desc,
    setDesc,
    duedate,
    setDuedate,
    setFile,
    handleAdd,
  }) => {
    return (
      <div>
        <form
          className="relative h-fit"
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
        >
          <div className="mb-1 flex flex-col gap-6">
            <div>
              <label className="text-[#3A6BAE] font-semibold">
                Judul Tugas
              </label>
              <Input
                size="lg"
                placeholder="Tugas 1"
                className="mt-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="flex gap-10">
              <div>
                <label className="text-[#3A6BAE] font-semibold">
                  Deskripsi Tugas
                </label>
                <Textarea
                  placeholder="Deskripsi Tugas"
                  className="mt-3 w-[450px]"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>

              <div>
                <label className="text-[#3A6BAE] font-semibold">
                  Deadline Tugas
                </label>
                <DateTimeInput
                  date={duedate} 
                  setDate={setDuedate} 
                  onChange={(e) => {
                    const [hours, minutes] = e.target.value.split(":");
                    const newDate = new Date(duedate); 
                    newDate.setHours(parseInt(hours), parseInt(minutes)); 
                    setDuedate(newDate); 
                  }}
                  className="mt-3"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 w-fit">
              <label className="text-[#3A6BAE] font-semibold">Lampiran</label>
              <InputFile
                onChange={(e) => setFile(e.target.files[0])}
                className="mt-3"
              />
            </div>

            <div className="absolute right-0 bottom-0">
              <Button
                type="submit"
                className="bg-[#3A6BAE] hover:bg-[#3a6aaee1]"
              >
                Tambah Tugas
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  },
  FormKelolaUser: ({
    fullName,
    status,
    email,
    password,
    kelas,
    setFullName,
    setStatus,
    setEmail,
    setPassword,
    setKelas,
    handleAddUser,
  }) => {
    return (
      <div>
        <form
          className="relative h-fit"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddUser();
          }}
        >
          <div className="mb-1 flex flex-col gap-6">
            <div className="flex gap-10 w-full item">
              <div>
                <label className="text-[#3A6BAE] font-semibold">Fullname</label>
                <Input
                  size="lg"
                  placeholder="Chika Anissa Putriyandenie"
                  className="mt-3 w-[400px]"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[#3A6BAE] font-semibold ">Status</label>
                <Select
                  onValueChange={(value) => setStatus(value)}
                  value={status}
                >
                  <SelectTrigger className="w-[300px]">
                    <SelectValue placeholder="Student / Teacher" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-10">
              <div>
                <label className="text-[#3A6BAE] font-semibold">Email</label>
                <Input
                  type="email"
                  size="lg"
                  placeholder="chika@neokom.com"
                  className="mt-3 w-[400px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="text-[#3A6BAE] font-semibold">Password</label>
                <Input
                  type="password"
                  size="lg"
                  className="mt-3 w-[300px]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 w-fit">
              <label className="text-[#3A6BAE] font-semibold">Class</label>
              <Input
                size="lg"
                placeholder="MIPA-1"
                className="mt-3"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
              />
            </div>
            <div className="absolute right-0 bottom-0">
              <Button
                type="submit"
                className="bg-[#3A6BAE] hover:bg-[#3a6aaee1]"
              >
                Add User
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  },
};

export { Forms };
