"use client";

import { useState } from "react";
import { CheckCircle, Loader2, ArrowRight } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, you would send this to your backend
    console.log("Form submitted:", formData);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    onSuccess?.();

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        description: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">提交成功！</h3>
        <p className="text-gray-600">我们会在 24 小时内与您联系。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            姓名 *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            placeholder="您的姓名"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            公司名称
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            placeholder="公司名称（选填）"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            邮箱 *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            电话
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            placeholder="联系电话（选填）"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          感兴趣的服务 *
        </label>
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
        >
          <option value="">请选择...</option>
          <option value="openclaw">OpenClaw 部署服务</option>
          <option value="development">AI 工具开发</option>
          <option value="automation">自动化工作流</option>
          <option value="chatbot">智能客服系统</option>
          <option value="other">其他</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          项目描述
        </label>
        <textarea
          name="description"
          rows={5}
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
          placeholder="请简要描述您的需求..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-violet-600 text-white py-4 rounded-lg font-semibold hover:bg-violet-700 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            提交中...
          </>
        ) : (
          <>
            提交咨询
            <ArrowRight className="w-5 h-5 ml-2" />
          </>
        )}
      </button>
    </form>
  );
}
