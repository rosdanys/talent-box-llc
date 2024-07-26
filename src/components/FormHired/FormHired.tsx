"use client";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import isMobilePhone from "validator/lib/isMobilePhone";

function checkFileType(file: File) {
  if (file[0]?.name) {
    const fileType = file[0].name.split(".");
    if (
      fileType[1] === "docx" ||
      fileType[1] === "doc" ||
      fileType[1] === "pdf"
    )
      return true;
  }
  return false;
}

const fileSchema = z.object({
  filename: z.string(),
  content: z.any(), // zod doesn't works well with instanceof(File) or FileList
});

const schemaformHired = z.object({
  firstName: z.string().min(1, { message: "Required" }),
  lastName: z.string().min(1, { message: "Required" }),
  email: z.string().email(),
  phone: z.string().refine(isMobilePhone, { message: "Phone Number Invalid!" }),
  cvfile: z
    .any(fileSchema)
    /* .refine((file: File) => file?.length !== 0, "File is required") */
    .refine(
      (file: File) => checkFileType(file),
      "Only .pdf, .docx, .doc formats are supported.",
    ),
  iam: z.string().min(1, { message: "Required" }),
  workPlace: z.string().min(1, { message: "Required" }),
  taxStatus: z.string().min(1, { message: "Required" }),
});
export type SchemaFormHired = z.infer<typeof schemaformHired>;

export const FormHired = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SchemaFormHired>({ resolver: zodResolver(schemaformHired) });

  const onSubmitForm = async (data: SchemaFormHired) => {
    const response = await fetch("/api/resend", {
      method: "POST",
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        attachments: data.cvfile,
        iam: data.iam,
        workPlace: data.workPlace,
        taxStatus: data.taxStatus,
      }),
    });

    if (response.ok) {
      // alert('Send Email')
      toast.success("Send Success OK!");
    } else {
      // alert('Error')
      toast.error("Send Fail!!!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div
        className="wow fadeInUp shadow-testimonial rounded-lg bg-white px-8 py-10 dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
        data-wow-delay=".2s"
      >
        <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
          {`Let's Get Started`}
        </h3>
        {/* Input First Name */}
        <div className="mb-[22px]">
          <label
            htmlFor="firstName"
            className="mb-4 block text-sm text-body-color dark:text-dark-6"
          >
            First Name*
          </label>
          <input
            className={`w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6 ${
              errors.firstName && "is-invalid"
            }`}
            type="text"
            placeholder="John"
            autoComplete="off"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-[#dc2626]">{`${errors.firstName.message}`}</p>
          )}
        </div>

        {/* Input Last Name */}
        <div className="mb-[22px]">
          <label
            htmlFor="lastName"
            className="mb-4 block text-sm text-body-color dark:text-dark-6"
          >
            Last Name*
          </label>
          <input
            className={`w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6 ${
              errors.lastName && "is-invalid"
            }`}
            type="text"
            placeholder="Doe"
            autoComplete="off"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-[#dc2626]">{`${errors.lastName.message}`}</p>
          )}
        </div>

        {/* Input Email */}
        <div className="mb-[22px]">
          <label
            htmlFor="email"
            className="mb-4 block text-sm text-body-color dark:text-dark-6"
          >
            Email*
          </label>
          <input
            className={`w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6 ${
              errors.email && "is-invalid"
            }`}
            type="text"
            placeholder="example@yourmail.com"
            autoComplete="off"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-[#dc2626]">{`${errors.email.message}`}</p>
          )}
        </div>

        {/* Input Phone */}
        <div className="mb-[22px]">
          <label
            htmlFor="phone"
            className="mb-4 block text-sm text-body-color dark:text-dark-6"
          >
            Phone Number*
          </label>
          <input
            className={`w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6 ${
              errors.phone && "is-invalid"
            }`}
            type="text"
            placeholder="+13051255211"
            autoComplete="off"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-[#dc2626]">{`${errors.phone.message}`}</p>
          )}
        </div>

        {/* Input Resumen */}

        <div className="mb-[22px]">
          <label
            htmlFor="cvfile"
            className="mb-4 block text-sm text-body-color dark:text-dark-6"
          >
            Resumen*
          </label>
          <input
            className={`w-full bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6 ${
              errors.cvfile && "is-invalid"
            }`}
            type="file"
            {...register("cvfile")}
          />
          {errors.cvfile && (
            <p className="text-[#dc2626]">{`${errors.cvfile.message}`}</p>
          )}
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="my"
            className="block text-sm text-body-color dark:text-dark-6"
          >
            I am*
          </label>
          <div className="mt-2">
            <select
              {...register("iam")}
              className={`${errors.iam ? "mb-2" : "mb-4"} block w-full rounded-md border-0 border-[#f1f1f1] bg-transparent p-2 text-body-color shadow-sm ring-1  ring-inset ring-gray-300 placeholder:text-body-color/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-inset dark:border-dark-3 dark:text-dark-6 sm:max-w-xs sm:text-sm sm:leading-6`}
            >
              <option value="">Please select one</option>
              <option value="Employed and looking">Employed and looking</option>
              <option value="On the market and looking">
                On the market and looking
              </option>
            </select>
            {errors.iam && (
              <p className="mb-2 text-[#dc2626]">{`${errors.iam.message}`}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="workPlace"
            className="block text-sm text-body-color dark:text-dark-6"
          >
            Workplace preference*
          </label>
          <div className="mt-2">
            <select
              {...register("workPlace")}
              className={`${errors.workPlace ? "mb-2" : "mb-4"} block w-full rounded-md border-0 border-[#f1f1f1] bg-transparent p-2 text-body-color shadow-sm ring-1  ring-inset ring-gray-300 placeholder:text-body-color/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-inset dark:border-dark-3 dark:text-dark-6 sm:max-w-xs sm:text-sm sm:leading-6`}
            >
              <option value="">Please select one</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
              <option value="Remote">Remote</option>
            </select>
            {errors.workPlace && (
              <p className="mb-2 text-[#dc2626]">{`${errors.workPlace.message}`}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="taxStatus"
            className="block text-sm text-body-color dark:text-dark-6"
          >
            Tax Status*
          </label>
          <div className="mt-2">
            <select
              {...register("taxStatus")}
              className={`${errors.taxStatus ? "mb-2" : "mb-4"} block w-full rounded-md border-0 border-[#f1f1f1] bg-transparent p-2 text-body-color shadow-sm ring-1  ring-inset ring-gray-300 placeholder:text-body-color/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-inset dark:border-dark-3 dark:text-dark-6 sm:max-w-xs sm:text-sm sm:leading-6`}
            >
              <option value="">Please select one</option>
              <option value="W2">W2</option>
              <option value="Independent contractor">
                Independent contractor
              </option>
            </select>
            {errors.taxStatus && (
              <p className="mb-2 text-[#dc2626]">{`${errors.taxStatus.message}`}</p>
            )}
          </div>
        </div>

        <div className="mb-0">
          <button
            type="submit"
            className="hover:bg-btn-hover-dark inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};
