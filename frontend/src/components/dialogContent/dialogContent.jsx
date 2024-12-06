import { Button } from "../ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const DialogContents = {
  Content1: ({ task }) => {
    return (
      <>
        <DialogHeader>
          <DialogTitle>Detail Tugas</DialogTitle>
          <DialogDescription>
            Berikut adalah detail dari tugas: <b>{task.name}</b>
            <a
              href="https://download848.mediafire.com/izxejsvfnhpglVvP6l8DChrU6GDnyy946GeMmMBwZ-RQZg4i8fJ8sWT1X9UDMoSV5v72227GR8JUwVAASRVzdz1mqMmYYY4r5-0s9aunDrYZaY02ENpE5ReoVApY-o1q2XJKWVfKgsoWS3XtSqRh-eG3mCLWisTrBBmeUmmy9wc49IY/kvkjyhhbwp13m2a/final-project-lms.rar"
              download
            >
              <Button className="w-full my-4 bg-[#0A355D] hover:bg-[#0a355de1] h-10">
                Download Tugas
              </Button>
            </a>
          </DialogDescription>
        </DialogHeader>
        <div>
          <p>Deadline: {task.deadline}</p>
          <div className="mb-2">
            <p>Deskripsi : </p>
            <ul className="ml-7">
              <li>Dikerjakan di kertas folio bergaris</li>
              <li>Tidak boleh menggunakan AI</li>
            </ul>
          </div>
          <p className={task.isCompleted ? "text-green-500" : "text-red-500"}>
            Status: {task.status}
          </p>
        </div>
        <DialogFooter>
          <DialogPrimitive.Close className="bg-[#0A355D] text-white py-2 px-5 rounded-md">
            Tutup
          </DialogPrimitive.Close>
        </DialogFooter>
      </>
    );
  },
  Content2: ({ task }) => {
    return (
      <>
        <DialogHeader>
          <DialogTitle>Upload Tugas</DialogTitle>
          <DialogDescription>
            Silakan unggah tugas Anda untuk: <b>{task.name}</b>
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-4">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            className="block text-gray-500 file:mr-4 file:py-3 file:px-4
          file:rounded-l-lg file:border-0
          file:bg-[#0A355D] file:text-white
          file:cursor-pointer
          hover:file:bg-[#0a355de7] border-2 border-gray-300 pe-3 rounded-xl w-full"
          />
        </div>
        <p className="text-gray-500 text-sm ml-1 -mt-2">PNG, JPG, JPEG</p>
        <DialogFooter>
          <Button
            variant="default"
            className="bg-[#0A355D] hover:bg-[#0a355de7]"
            download=""
          >
            Unggah
          </Button>
          <DialogPrimitive.Close className="border border-black px-5 py-1 rounded-md">
            Batal
          </DialogPrimitive.Close>
        </DialogFooter>
      </>
    );
  },
};

export { DialogContents };
