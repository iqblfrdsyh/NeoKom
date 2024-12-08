import React from "react";
import InputFile from "../inputFile/inputFile";
import { Button } from "../ui/button";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { formatDate } from "@/lib/utils";

const DialogContents = {
  Content1: React.memo(({ task }) => {
    return (
      <>
        <DialogHeader>
          <DialogTitle>Detail Tugas</DialogTitle>
          <DialogDescription>
            Berikut adalah detail dari tugas: <b>{task.title}</b>
            <a
              href={task.file_url}
              download="final-project-lms.rar"
            >
              Download File
              <Button className="w-full my-4 bg-[#0A355D] hover:bg-[#0a355de1] h-10">
                Download Tugas
              </Button>
            </a>
          </DialogDescription>
        </DialogHeader>
        <div>
          <p>Deadline: {formatDate(task.due_date)}</p>
          <div className="mb-2">
            <p>Deskripsi : </p>
            <p className="pl-3 italic">{task.description}</p>
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
  }),
  Content2: React.memo(({ task }) => {
    return (
      <>
        <DialogHeader>
          <DialogTitle>Upload Tugas</DialogTitle>
          <DialogDescription>
            Silakan unggah tugas Anda untuk: <b>{task.name}</b>
          </DialogDescription>
        </DialogHeader>
        <InputFile />
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
  }),
};

export { DialogContents };
