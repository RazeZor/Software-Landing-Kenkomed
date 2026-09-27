import { WorkspaceForm, SettingsForm } from "@/components/ui/form-layout";

export default function FormsDemoPage() {
  return (
    <main className="min-h-screen bg-background py-10 space-y-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-display font-bold">Form Layout Components Demo</h1>
        <p className="text-foreground-muted mt-2">These components are ready to be integrated anywhere in the app.</p>
      </div>

      <section>
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <h2 className="text-xl font-semibold border-b pb-2">Workspace Form</h2>
        </div>
        <WorkspaceForm />
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <h2 className="text-xl font-semibold border-b pb-2">Settings Form</h2>
        </div>
        <SettingsForm />
      </section>
    </main>
  );
}
