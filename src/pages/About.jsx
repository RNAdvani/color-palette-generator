import {
  FaGithub,
  FaGlobe,
  FaEnvelope,
  FaPalette,
  FaCheck,
  FaFileExport,
  FaUniversalAccess,
} from "react-icons/fa";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiEslint,
  SiPrettier,
  SiVitest,
} from "react-icons/si";

export default function Component() {
  const features = [
    { icon: <FaPalette />, text: "Color Shade Generation" },
    { icon: <FaCheck />, text: "Contrast Checker" },
    { icon: <FaFileExport />, text: "Export Options" },
    { icon: <FaUniversalAccess />, text: "Accessibility Compliance" },
    { icon: <></>, text: "Interactive Color Manipulation" },
  ];

  const tools = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiEslint />, name: "ESLint" },
    { icon: <SiPrettier />, name: "Prettier" },
    { icon: <SiVitest />, name: "Vitest" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-headerBackground to-white text-headerBrand scroll-smooth">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <header className="text-center">
          <h1 className="text-6xl font-bold mb-6">About Color Conjure 🎨</h1>
          <p className="text-2xl max-w-3xl mx-auto">
            Empowering designers and developers to create accessible and
            consistent color schemes with ease.
          </p>
        </header>

        <section className="bg-white rounded-custom-xl shadow-2xl p-10">
          <h2 className="text-4xl font-semibold mb-6">
            What is Color Conjure?
          </h2>
          <p className="text-xl leading-relaxed">
            Color Conjure is an innovative, open-source color palette generator
            designed to streamline the process of creating harmonious and
            accessible color schemes for your projects. Whether you're a
            seasoned designer or a budding developer, our tool empowers you to
            generate shades, verify color contrasts, and export your palettes in
            various formats, all with unparalleled ease and precision.
          </p>
        </section>

        <section className="bg-white rounded-custom-xl shadow-2xl p-10">
          <h2 className="text-4xl font-semibold mb-10">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-headerBackground text-black p-6 rounded-custom-lg"
              >
                <div className="text-4xl">{feature.icon}</div>
                <span className="text-xl font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-custom-xl shadow-2xl p-10">
          <h2 className="text-4xl font-semibold mb-10">Tools & Libraries</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center bg-headerBackground text-black p-6 rounded-custom-lg aspect-square"
              >
                <div className="text-5xl mb-4">{tool.icon}</div>
                <span className="text-lg font-medium text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-custom-xl shadow-2xl p-10">
          <h2 className="text-4xl font-semibold mb-6">Get Involved</h2>
          <p className="text-xl mb-8">
            We welcome contributions from developers and designers alike! There
            are many ways to get involved with Color Conjure and help shape its
            future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://github.com/utk09-NCL/color-palette-generator"
              className="flex items-center justify-center px-6 py-4 bg-headerBrand text-black rounded-custom-lg text-xl font-medium"
            >
              <FaGithub className="mr-3 text-2xl" /> View on GitHub
            </a>
            <a
              href="https://github.com/utk09-NCL/color-palette-generator/blob/main/CONTRIBUTING.md"
              className="flex items-center justify-center px-6 py-4 bg-headerBrand text-black rounded-custom-lg text-xl font-medium"
            >
              Contributing Guidelines
            </a>
            <a
              href="https://github.com/utk09-NCL/color-palette-generator/blob/main/design/DESIGN.md"
              className="flex items-center justify-center px-6 py-4 bg-headerBrand text-black rounded-custom-lg text-xl font-medium"
            >
              Contribute to Design
            </a>
          </div>
        </section>

        <section className="bg-white rounded-custom-xl shadow-2xl p-10">
          <h2 className="text-4xl font-semibold mb-6">Contact</h2>
          <p className="text-xl mb-8">
            Have questions or want to discuss the project? Get in touch with the
            author:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://utk09.com"
              className="flex items-center px-6 py-4 bg-headerBackground text-black rounded-custom-lg text-xl font-medium"
            >
              <FaGlobe className="mr-3 text-2xl" /> utk09.com
            </a>
            <a
              href="mailto:contact@utk09.com"
              className="flex items-center px-6 py-4 bg-headerBackground text-blackgit rounded-custom-lg text-xl font-medium"
            >
              <FaEnvelope className="mr-3 text-2xl" /> contact@utk09.com
            </a>
          </div>
        </section>

        <footer className="text-center text-xl">
          <p>&copy; 2024 Color Conjure</p>
        </footer>
      </div>
    </div>
  );
}
