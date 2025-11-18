import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const YEARS = Array.from({ length: 21 }, (_, i) => 2010 + i).map(String);

const STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Karnataka",
  "Kerala",
  "Chhattisgarh",
  "Uttar Pradesh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "West Bengal",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Orissa",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
];

const DEPARTMENTS = [
  "Creative",
  "Operation",
  "Marketing",
  "HR",
  "Technology",
  "Consulting",
  "PR",
];
const DOCUMENT_TYPES = [
  "Aadhar Card",
  "Driving License",
  "Pan Card",
  "Passport",
  "Voter ID",
  "Electricity Bill",
  "MTNL Bill",
];

const VoluntaryForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      gender: "Male",
    },
  });

  const selectedGender = watch("gender");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("full_name", data.name);
      formData.append("option", "string");
      formData.append("email", data.email);
      formData.append("contact_number", data.mobile);
      formData.append("course", data.course);
      formData.append("year_of_pass", data.yopass);
      formData.append("institute", data.institute);
      formData.append("department", data.department);
      formData.append("state", data.state);
      formData.append("pincode", data.pincode);
      formData.append("document_type", data.document_type);
      if (data.files && data.files.length > 0) {
        formData.append("document", data.files[0]);
      }
      formData.append("uid_no", data.uid_no);

      const response = await fetch("/membership/volunteer/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        // Map backend unique validation messages if present
        throw err;
      }

      reset();
      navigate("/success/");
    } catch (error) {
      // Optionally surface field-level errors if backend returns them
      // Fallback: simple alert for now
      alert("Unable to save Data");
    } finally {
      setIsSubmitting(false);
    }
  };

  const yearOptions = useMemo(() => YEARS, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-textColor mb-6">
        Professional Information
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <p className="font-medium text-textColor mb-2">Choose Gender</p>
            <div className="inline-flex rounded-md border border-gray-300 overflow-hidden">
              {["Male", "Female", "Other"].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() =>
                    setValue("gender", g, { shouldValidate: true })
                  }
                  className={`px-4 py-2 text-sm ${
                    selectedGender === g
                      ? "bg-primary-600 text-white"
                      : "bg-white text-gray-700"
                  } ${g !== "Other" ? "border-r border-gray-300" : ""}`}
                >
                  {g}
                </button>
              ))}
            </div>
            <input type="hidden" {...register("gender")} />
          </div>

          <div className="md:col-span-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                maxLength: {
                  value: 50,
                  message: "Name must be at most 50 characters long",
                },
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="md:col-span-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              {...register("email", {
                required: "E-mail is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Must be valid e-mail",
                },
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="md:col-span-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number *
            </label>
            <input
              type="tel"
              inputMode="numeric"
              {...register("mobile", {
                required: "Mobile is required.",
                pattern: { value: /^\d+$/, message: "Invalid Mobile Number" },
                minLength: {
                  value: 10,
                  message: "Mobile Number must be 10 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Mobile Number must be 10 characters",
                },
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            {errors.mobile && (
              <p className="mt-1 text-sm text-red-600">
                {errors.mobile.message}
              </p>
            )}
          </div>

          <div className="md:col-span-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department *
            </label>
            <select
              {...register("department", {
                required: "Department is required.",
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
              defaultValue=""
            >
              <option value="" disabled>
                Select Department
              </option>
              {DEPARTMENTS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            {errors.department && (
              <p className="mt-1 text-sm text-red-600">
                {errors.department.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <p className="font-medium text-textColor mb-2">Education</p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institute *
              </label>
              <input
                type="text"
                {...register("institute", {
                  required: "Institute is required.",
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              {errors.institute && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.institute.message}
                </p>
              )}
            </div>

            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course *
              </label>
              <input
                type="text"
                {...register("course", { required: "Course is required." })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              {errors.course && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.course.message}
                </p>
              )}
            </div>

            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of passing *
              </label>
              <select
                {...register("yopass", {
                  required: "Year of passing is required.",
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Year
                </option>
                {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              {errors.yopass && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.yopass.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <p className="font-medium text-textColor mb-2">Address</p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <input
                type="text"
                {...register("address", { required: "Address is required." })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                States *
              </label>
              <select
                {...register("state", { required: "State is required." })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                defaultValue=""
              >
                <option value="" disabled>
                  Select State
                </option>
                {STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.state && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.state.message}
                </p>
              )}
            </div>

            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pincode *
              </label>
              <input
                type="tel"
                inputMode="numeric"
                {...register("pincode", {
                  required: "Mobile is required.",
                  pattern: { value: /^\d+$/, message: "Invalid Pincode" },
                  minLength: {
                    value: 6,
                    message: "Pincode must be 6 characters",
                  },
                  maxLength: {
                    value: 6,
                    message: "Pincode must be 6 characters",
                  },
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              {errors.pincode && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.pincode.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <p className="font-medium text-textColor mb-2">Document</p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-12">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Document Type *
              </label>
              <select
                {...register("document_type", {
                  required: "Document Type is required.",
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Document Type
                </option>
                {DOCUMENT_TYPES.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.document_type && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.document_type.message}
                </p>
              )}
            </div>

            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                UID No. *
              </label>
              <input
                type="text"
                {...register("uid_no", { required: "UID No. is required." })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              {errors.uid_no && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.uid_no.message}
                </p>
              )}
            </div>

            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Document Upload *
              </label>
              <input
                type="file"
                {...register("files", {
                  required: "Document Upload is required.",
                })}
                className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
              />
              {errors.files && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.files.message}
                </p>
              )}
            </div>

            <div className="md:col-span-12">
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 border rounded-md text-textColor border-textColor hover:bg-gray-50 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VoluntaryForm;
