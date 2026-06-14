import { Suspense } from "react";
import { CreateListingForm } from "@/components/listings/CreateListingForm";

async function CreateListingContent() {
  // TODO: Replace with actual auth when Supabase is configured
  // const session = await auth();
  // if (!session) {
  //   redirect("/auth/login?redirect=/listings/new");
  // }

  // Mock: Show placeholder until auth is configured
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-text-primary">
          Elan yaratma səhifəsi hazırlanır
        </h1>
        <p className="mt-4 text-text-muted">
          Supabase Auth konfiqurasiyası tamamlandıqdan sonra elan yaratma formu
          aktiv olacaq.
        </p>
      </div>
    </div>
  );

  // The code below will be used when auth is configured
  // const user = session.user;

  // // Check if user has permission to create listings
  // if (user.role === "USER") {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-background px-4">
  //       <div className="max-w-md text-center">
  //         <h1 className="text-2xl font-bold text-text-primary">
  //           İcazə yoxdur
  //         </h1>
  //         <p className="mt-4 text-text-muted">
  //           Elan yaratmaq üçün agentlik hesabı yaratmalısınız.
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="container mx-auto px-4 py-8">
  //     <div className="mx-auto max-w-4xl">
  //       <div className="mb-8">
  //         <h1 className="text-3xl font-bold text-text-primary">
  //           Yeni Elan Yarat
  //         </h1>
  //         <p className="mt-2 text-text-muted">
  //           Əmlak elanınızı yaratmaq üçün formu doldurun
  //         </p>
  //       </div>
  //       <CreateListingForm userId={user.id} userRole={user.role} agencyId={user.agencyId} />
  //     </div>
  //   </div>
  // );
}

export default function CreateListingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      }
    >
      <CreateListingContent />
    </Suspense>
  );
}
