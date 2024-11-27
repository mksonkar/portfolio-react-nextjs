import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="disabled:bg-opacity-65 group flex h-12 w-32 items-center justify-center gap-2 rounded-full bg-[#3B2316]/90 text-[#FFE6A7] outline-none transition-all hover:scale-110 hover:bg-[#6F1D1B] focus:scale-110 disabled:scale-100 dark:bg-[#FFE6A7]/60 dark:text-[#1e110b] dark:hover:bg-[#6F1D1B]/50 dark:hover:text-[#ffe6a4]/70"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
}
