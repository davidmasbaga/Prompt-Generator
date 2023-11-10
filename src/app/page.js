"use client";

import { useState, useEffect } from "react";
import prompts from "../data/marketing_prompts.json";
import roles from "../data/roles.json";
import languages from "../data/languages.json";
import outputs from "../data/outputs.json";
import tones from "../data/tones.json";

export default function Home() {
  const [selectedPromptDescription, setSelectedPromptDescription] =
    useState("Todos");
  const [filteredPrompts, setFilteredPrompts] = useState([]);
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedTones, setSelectedTones] = useState("");
  const [selectedOutput, setSelectedOutput] = useState("")
  const [finalText, setFinalText] = useState("");

  useEffect(() => {
    // Filtrar prompts basados en la descripción seleccionada
    if (selectedPromptDescription === "Todos") {
      setFilteredPrompts(prompts);
    } else {
      const filtered = prompts.filter(
        (p) => p.prompt_description === selectedPromptDescription
      );
      setFilteredPrompts(filtered);
    }
  }, [selectedPromptDescription]);

  // Actualiza el texto final cuando cambian las selecciones
  useEffect(() => {
    setFinalText(
      `${selectedRole} ${selectedPrompt}. ${selectedTones} ${selectedLanguage}. ${selectedOutput} `
    );
  }, [selectedPrompt, selectedRole, selectedLanguage, selectedTones, selectedOutput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(finalText).then(() => {
      // Opcional: Mostrar mensaje de confirmación o cambiar el estado del botón
      console.log("Texto copiado al portapapeles");
    });
  };

  return (
    <div className="p-4 ">
      <header className="mb-10">
        <h1 className="text-2xl font-bold mt-10 text-center text-slate-900">
          Marketing Prompt Generator
        </h1>
        <p className="text-[0.6rem] text-center text-slate-900">
          Inspired in the <a href="https://docs.google.com/spreadsheets/d/1gd46-4qNBp6_HjyTDCNp3rXjyhem1SDtK43ecdwtmOQ/edit#gid=920506879">Google Sheets tool</a> by <a href="https://www.linkedin.com/in/i%C3%B1aki-gorostiza-%E2%89%A1-head-of-digital-analytics-at-lin3s-0749354/?originalSubdomain=es">Iñaki Gorostiza</a>
        </p>
      </header>
      {/* Select para Prompt Descriptions */}
      <section className=" max-w-[82rem] mx-auto py-12 px-5  rounded-2xl">
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-3 justify-center">
          <label className="text-center font-bold text-slate-900 ml-1 text-sm">
           1️⃣ Choose a category to filter the base prompt
          </label>
          <select
            className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:black focus:border-black block w-full p-2.5  border-gray-200 placeholder-gray-400 focus:ring-black max-w-2xl mb-2"
            onChange={(e) => setSelectedPromptDescription(e.target.value)}
          >
            <option value="Todos">All Categories</option>
            {/* Generar opciones únicas para prompt_description */}
            {[...new Set(prompts.map((p) => p.prompt_description))]
              .sort()
              .map((description, idx) => (
                <option key={idx} value={description}>
                  {description}
                </option>
              ))}
          </select>
        </div>

        {/* Select para Prompts filtrados */}
        <div className="flex flex-col gap-3 justify-center ">
          <label className="text-sm text-center text-black ml-1 font-bold">
           2️⃣ Choose your BASE Prompt
          </label>
          <select
            className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:black focus:border-black block w-full p-2.5  border-gray-200 placeholder-gray-400 focus:ring-black max-w-[82rem] mb-2"
            onChange={(e) => setSelectedPrompt(e.target.value)}
          >
            <option disabled selected>
              Base Prompt
            </option>
            {filteredPrompts.map((prompt, idx) => (
              <option key={idx} value={prompt.base_prompt}>
                {prompt.base_prompt}
              </option>
            ))}
          </select>
        </div>
      </div>
      </section>

      <h2 className="mb-3 font-semibold text-center mt-12">3️⃣ Prompt options ⚙</h2>
      <section className="bg-slate-100 max-w-[82rem] mx-auto py-12 px-5  rounded-2xl">
        {/* Selector de Idiomas */}
        <label className="text-xs text-slate-900 ml-1">
          Choose the Professional Output Role
        </label>
        <select
          className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:black focus:border-black block w-full p-2.5  border-gray-200 placeholder-gray-400 focus:ring-black max-w-[82rem] mb-2"
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option selected>
            
          </option>
          {roles.map((role, idx) => (
            <option key={idx} value={role}>
              {role}
            </option>
          ))}
        </select>

        {/* Selector de Idiomas */}
        <section className="flex flex-col md:flex-row gap-2">
          <div className="flex-1">
            <label className="text-xs text-slate-900 ml-1">
              Choose your output language
            </label>
            <select
              className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:black focus:border-black block w-full p-2.5  border-gray-200 placeholder-gray-400 focus:ring-black mb-2"
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option disabled selected>
                Language (Default English)
              </option>
              {languages.map((language, idx) => (
                <option key={idx} value={`Return your output in ${language}`}>
                  {language}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="text-xs text-slate-900 ml-1">
              Choose your output format (optional)
            </label>
            <select
              className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:black focus:border-black block w-full p-2.5  border-gray-200 placeholder-gray-400 focus:ring-black mb-2"
              onChange={(e) => setSelectedOutput(e.target.value)}
            >
              <option selected>
                
              </option>
              {outputs.map((output, idx) => (
                <option key={idx} value={`Return your output in ${output}`}>
                  {output}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/*Selector de Tonos */}
        <label className="text-xs text-slate-900 ml-1">
          Choose the Output Tone
        </label>
        <select
          className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:black focus:border-black block w-full p-2.5  border-gray-200 placeholder-gray-400 focus:ring-black max-w-[82rem] mb-2"
          onChange={(e) => setSelectedTones(e.target.value)}
        >
          <option disabled selected>
            
          </option>
          {tones.map((tone, idx) => (
            <option key={idx} value={tone}>
              {tone}
            </option>
          ))}
        </select>

        {/* Selector de Roles */}
      
      </section>


<section className=" max-w-[82rem] mx-auto p-5 rounded-2xl my-8">
  <h2 className="mb-3 text-xl font-bold text-center mt-12">💥Final Prompt💥</h2>
      <textarea
        className=" w-full bg-slate-50 h-64 p-5 "
        value={finalText}
        
      ></textarea>
            
  <button type="button" class="text-gray-900 bg-white border mt-5 border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"  onClick={handleCopy}>
        Copy Prompt
      </button>
      </section>
    </div>
  );
}
