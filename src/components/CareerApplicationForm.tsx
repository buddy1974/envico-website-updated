"use client";

import { useState, useRef } from "react";
import { CheckCircle, Upload, ChevronRight, ChevronLeft } from "lucide-react";

const jobRoles = [
  {
    title: "Support Worker",
    hours: "Full-time / Part-time",
    salary: "£12.21 – £13.50/hr",
    location: "Bishops House, Hayes",
    badge: "Hiring Now",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    title: "Senior Support Worker",
    hours: "Full-time",
    salary: "£13.50 – £14.50/hr",
    location: "Bishops House, Hayes",
    badge: "Hiring Now",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    title: "Team Leader",
    hours: "Full-time",
    salary: "£15.00 – £17.00/hr",
    location: "Hayes, Middlesex",
    badge: "1 Position",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    title: "Domiciliary Care Worker",
    hours: "Part-time / Flexible",
    salary: "£12.21 – £13.00/hr + mileage",
    location: "Greater London",
    badge: "Flexible Hours",
    badgeColor: "bg-purple-100 text-purple-800",
  },
];

interface FormData {
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
  currentRole: string;
  yearsExperience: string;
  whyEnvico: string;
  cvFile: File | null;
  declaration: boolean;
}

const initialData: FormData = {
  role: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  postcode: "",
  currentRole: "",
  yearsExperience: "",
  whyEnvico: "",
  cvFile: null,
  declaration: false,
};

const TOTAL_STEPS = 5;

const stepLabels = [
  "Choose Role",
  "Personal Details",
  "Experience",
  "Upload CV",
  "Declaration",
];

export default function CareerApplicationForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormData, value: string | boolean | File | null) =>
    setData((p) => ({ ...p, [field]: value }));

  const handleFile = (file: File | null) => {
    if (!file) return;
    if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
      setError("Please upload a PDF or Word document.");
      return;
    }
    setError("");
    set("cvFile", file);
  };

  const canAdvance = (): boolean => {
    if (step === 1) return !!data.role;
    if (step === 2) return !!(data.firstName && data.lastName && data.email && data.phone);
    if (step === 3) return !!(data.yearsExperience && data.whyEnvico);
    if (step === 4) return !!data.cvFile;
    if (step === 5) return data.declaration;
    return false;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const formPayload = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (v !== null && v !== undefined) {
          if (v instanceof File) formPayload.append(k, v);
          else formPayload.append(k, String(v));
        }
      });
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CAREOS_API}/api/careers/apply`,
        { method: "POST", body: formPayload }
      );
      if (!res.ok) throw new Error();
      setSuccess(true);
    } catch {
      setError("Submission failed. Please email your CV to info@envicosl.co.uk.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <CheckCircle size={48} className="text-envico-green mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
        <p className="text-gray-600 mb-1">
          Thank you for applying for the <strong>{data.role}</strong> position at Envico.
        </p>
        <p className="text-gray-500 text-sm">
          Our recruitment team will be in touch within 3 working days.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {stepLabels.map((label, i) => (
            <div
              key={label}
              className={`flex flex-col items-center flex-1 ${i < stepLabels.length - 1 ? "relative" : ""}`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                  i + 1 < step
                    ? "bg-envico-green border-envico-green text-white"
                    : i + 1 === step
                    ? "bg-envico-blue border-envico-blue text-white"
                    : "bg-white border-gray-300 text-gray-400"
                }`}
              >
                {i + 1 < step ? <CheckCircle size={16} /> : i + 1}
              </div>
              {i < stepLabels.length - 1 && (
                <div
                  className={`absolute top-4 left-1/2 w-full h-0.5 -z-10 ${
                    i + 1 < step ? "bg-envico-green" : "bg-gray-200"
                  }`}
                />
              )}
              <span className={`text-xs mt-1.5 hidden md:block font-medium ${i + 1 === step ? "text-envico-blue" : "text-gray-400"}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-2 md:hidden">
          Step {step} of {TOTAL_STEPS}: <strong>{stepLabels[step - 1]}</strong>
        </p>
      </div>

      {/* Step content */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

        {/* STEP 1 — Choose role */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose a Role</h2>
            <p className="text-gray-500 text-sm mb-6">Select the position you would like to apply for.</p>
            <div className="space-y-4">
              {jobRoles.map((job) => (
                <button
                  key={job.title}
                  type="button"
                  onClick={() => set("role", job.title)}
                  className={`w-full text-left border-2 rounded-xl p-5 transition-all hover:shadow-md ${
                    data.role === job.title
                      ? "border-envico-blue bg-blue-50"
                      : "border-gray-200 hover:border-envico-blue"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">{job.title}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${job.badgeColor}`}>
                          {job.badge}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                        <span>⏰ {job.hours}</span>
                        <span>📍 {job.location}</span>
                        <span className="font-semibold text-envico-green">💷 {job.salary}</span>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 flex items-center justify-center ${
                      data.role === job.title ? "border-envico-blue bg-envico-blue" : "border-gray-300"
                    }`}>
                      {data.role === job.title && <CheckCircle size={14} className="text-white" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 — Personal details */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Details</h2>
            <p className="text-gray-500 text-sm mb-6">Applying for: <strong className="text-envico-blue">{data.role}</strong></p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={data.lastName}
                    onChange={(e) => set("lastName", e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => set("email", e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue"
                    placeholder="07700 000000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Home Address</label>
                <input
                  type="text"
                  value={data.address}
                  onChange={(e) => set("address", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue"
                  placeholder="Street address"
                />
              </div>
              <div className="max-w-xs">
                <label className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                <input
                  type="text"
                  value={data.postcode}
                  onChange={(e) => set("postcode", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue"
                  placeholder="e.g. UB3 2PN"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 — Experience */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Experience</h2>
            <p className="text-gray-500 text-sm mb-6">Tell us about your background. No experience? No problem — full training is provided.</p>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current or Most Recent Job Title</label>
                <input
                  type="text"
                  value={data.currentRole}
                  onChange={(e) => set("currentRole", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue"
                  placeholder="e.g. Care Assistant, Student, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Care / Support Experience <span className="text-red-500">*</span>
                </label>
                <select
                  value={data.yearsExperience}
                  onChange={(e) => set("yearsExperience", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue"
                >
                  <option value="">Select...</option>
                  <option value="0">No experience (will train)</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-2">1–2 years</option>
                  <option value="2-5">2–5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Why do you want to work at Envico? <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  value={data.whyEnvico}
                  onChange={(e) => set("whyEnvico", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue"
                  placeholder="Tell us what motivates you to work in care and why you are applying to Envico..."
                />
                <p className="text-xs text-gray-400 mt-1">{data.whyEnvico.length} characters</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4 — Upload CV */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Your CV</h2>
            <p className="text-gray-500 text-sm mb-6">PDF or Word format, max 5MB. No CV? Email it later to info@envicosl.co.uk.</p>

            <div
              className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
                dragOver
                  ? "border-envico-blue bg-blue-50"
                  : data.cvFile
                  ? "border-envico-green bg-green-50"
                  : "border-gray-300 hover:border-envico-blue"
              }`}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                handleFile(e.dataTransfer.files[0]);
              }}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
              />
              {data.cvFile ? (
                <>
                  <CheckCircle size={40} className="text-envico-green mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">{data.cvFile.name}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {(data.cvFile.size / 1024 / 1024).toFixed(2)} MB — Click to change
                  </p>
                </>
              ) : (
                <>
                  <Upload size={40} className="text-gray-300 mx-auto mb-3" />
                  <p className="font-semibold text-gray-700">Drag &amp; drop your CV here</p>
                  <p className="text-sm text-gray-400 mt-1">or click to browse files</p>
                  <p className="text-xs text-gray-400 mt-3">PDF, DOC, DOCX — max 5MB</p>
                </>
              )}
            </div>
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2 mt-3">
                {error}
              </p>
            )}
            <button
              type="button"
              onClick={() => set("cvFile", null)}
              className="text-xs text-gray-400 hover:text-gray-600 mt-3 block"
            >
              Skip — I don&apos;t have a CV to hand
            </button>
          </div>
        )}

        {/* STEP 5 — Declaration */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Declaration</h2>
            <p className="text-gray-500 text-sm mb-6">Please review your application and confirm the declaration below.</p>

            <div className="bg-gray-50 rounded-xl p-5 text-sm text-gray-600 space-y-2 mb-6 border border-gray-100">
              <p><strong>Role:</strong> {data.role}</p>
              <p><strong>Name:</strong> {data.firstName} {data.lastName}</p>
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>Phone:</strong> {data.phone}</p>
              <p><strong>Experience:</strong> {data.yearsExperience} years</p>
              <p><strong>CV:</strong> {data.cvFile ? data.cvFile.name : "Not uploaded"}</p>
            </div>

            <label className="flex items-start gap-3 cursor-pointer group mb-6">
              <input
                type="checkbox"
                checked={data.declaration}
                onChange={(e) => set("declaration", e.target.checked)}
                className="mt-1 w-4 h-4 accent-envico-blue"
              />
              <span className="text-sm text-gray-700 leading-relaxed">
                I confirm that the information I have provided is true and accurate to the best of my knowledge.
                I understand that any false information may result in my application being rejected or, if employed,
                could lead to dismissal. I consent to Envico Supported Living processing my personal data for
                recruitment purposes in accordance with their privacy policy.
              </span>
            </label>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2 mb-4">
                {error}
              </p>
            )}
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 1}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} /> Back
          </button>

          {step < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              disabled={!canAdvance()}
              className="flex items-center gap-2 bg-envico-blue text-white font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continue <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canAdvance() || loading}
              className="bg-envico-green text-white font-semibold px-8 py-2.5 rounded-lg hover:bg-envico-green-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
