import type { ReactNode } from "react";
import Link from "next/link";
import { Quiz } from "./Quiz";
import { AntigravitySurfacesFigure } from "./figures/pages/AntigravitySurfacesFigure";
import { BugReportFigure } from "./figures/pages/BugReportFigure";
import { GitUndoFigure } from "./figures/pages/GitUndoFigure";
import { NinetyWallFigure } from "./figures/pages/NinetyWallFigure";
import { Part4RecapFigure } from "./figures/pages/Part4RecapFigure";
import { Part5RecapFigure } from "./figures/pages/Part5RecapFigure";
import { PrototypeGapFigure } from "./figures/pages/PrototypeGapFigure";
import { RuleConflictFigure } from "./figures/pages/RuleConflictFigure";
import { RulesContentsFigure } from "./figures/pages/RulesContentsFigure";
import { RulesFilesFigure } from "./figures/pages/RulesFilesFigure";
import { ShortRulesFigure } from "./figures/pages/ShortRulesFigure";
import { SkillFileFigure } from "./figures/pages/SkillFileFigure";
import { SlashCommandFigure } from "./figures/pages/SlashCommandFigure";
import { SpecTruthFigure } from "./figures/pages/SpecTruthFigure";
import { StarterKitFigure } from "./figures/pages/StarterKitFigure";
import { TaskCardFigure } from "./figures/pages/TaskCardFigure";
import { ReadGeneratedCodeFigure } from "./figures/pages/ReadGeneratedCodeFigure";
import { SmallAskFigure } from "./figures/pages/SmallAskFigure";
import { VibeFitsFigure } from "./figures/pages/VibeFitsFigure";
import { VibeLoopFigure } from "./figures/pages/VibeLoopFigure";
import { VibeOriginFigure } from "./figures/pages/VibeOriginFigure";
import { VibeToEngineeringFigure } from "./figures/pages/VibeToEngineeringFigure";
import { WhyInstructionsFigure } from "./figures/pages/WhyInstructionsFigure";
import { ButtonClickFigure } from "./figures/pages/ButtonClickFigure";
import { ClientServerFigure } from "./figures/pages/ClientServerFigure";
import { EnvironmentsFigure } from "./figures/pages/EnvironmentsFigure";
import { FakeBackendFigure } from "./figures/pages/FakeBackendFigure";
import { FullStackMapFigure } from "./figures/pages/FullStackMapFigure";
import { HostingFigure } from "./figures/pages/HostingFigure";
import { HtmlCssJsFigure } from "./figures/pages/HtmlCssJsFigure";
import { OpenWebsiteFigure } from "./figures/pages/OpenWebsiteFigure";
import { Part6RecapFigure } from "./figures/pages/Part6RecapFigure";
import { ApiContractFigure } from "./figures/pages/ApiContractFigure";
import { AuthHeaderFigure } from "./figures/pages/AuthHeaderFigure";
import { FetchStepsFigure } from "./figures/pages/FetchStepsFigure";
import { JsonTypesFigure } from "./figures/pages/JsonTypesFigure";
import { MigrationFileFigure } from "./figures/pages/MigrationFileFigure";
import { Part7RecapFigure } from "./figures/pages/Part7RecapFigure";
import { AiRiskFigure } from "./figures/pages/AiRiskFigure";
import { AuthMethodsFigure } from "./figures/pages/AuthMethodsFigure";
import { AuthzCheckFigure } from "./figures/pages/AuthzCheckFigure";
import { CardBoundaryFigure } from "./figures/pages/CardBoundaryFigure";
import { EnvFileFigure } from "./figures/pages/EnvFileFigure";
import { GatewayFigure } from "./figures/pages/GatewayFigure";
import { HttpsCorsFigure } from "./figures/pages/HttpsCorsFigure";
import { OwaspMapFigure } from "./figures/pages/OwaspMapFigure";
import { Part8RecapFigure } from "./figures/pages/Part8RecapFigure";
import { AngularSignalFigure } from "./figures/pages/AngularSignalFigure";
import { AppRouterFilesFigure } from "./figures/pages/AppRouterFilesFigure";
import { ComponentTreeFigure } from "./figures/pages/ComponentTreeFigure";
import { FormActionFigure } from "./figures/pages/FormActionFigure";
import { LoadingFetchFigure } from "./figures/pages/LoadingFetchFigure";
import { Part9RecapFigure } from "./figures/pages/Part9RecapFigure";
import { GateCheckFigure } from "./figures/pages/GateCheckFigure";
import { LockedTestFigure } from "./figures/pages/LockedTestFigure";
import { LoopStepsFigure } from "./figures/pages/LoopStepsFigure";
import { MakerCheckerFigure } from "./figures/pages/MakerCheckerFigure";
import { OnePromptFigure } from "./figures/pages/OnePromptFigure";
import { ParallelAgentsFigure } from "./figures/pages/ParallelAgentsFigure";
import { Part10RecapFigure } from "./figures/pages/Part10RecapFigure";
import { BenchmarkTrapFigure } from "./figures/pages/BenchmarkTrapFigure";
import { CostTriangleFigure } from "./figures/pages/CostTriangleFigure";
import { CrossReviewFigure } from "./figures/pages/CrossReviewFigure";
import { DayWorkflowFigure } from "./figures/pages/DayWorkflowFigure";
import { EscalateModelFigure } from "./figures/pages/EscalateModelFigure";
import { MixFailuresFigure } from "./figures/pages/MixFailuresFigure";
import { ModelSplitFigure } from "./figures/pages/ModelSplitFigure";
import { Part11RecapFigure } from "./figures/pages/Part11RecapFigure";
import { ActionsGateFigure } from "./figures/pages/ActionsGateFigure";
import { AgentHookPlaceFigure } from "./figures/pages/AgentHookPlaceFigure";
import { LintFormatTypeFigure } from "./figures/pages/LintFormatTypeFigure";
import { LockedFileFigure } from "./figures/pages/LockedFileFigure";
import { Part12RecapFigure } from "./figures/pages/Part12RecapFigure";
import { CapstoneFigure } from "./figures/pages/CapstoneFigure";
import { FurtherReadingFigure } from "./figures/pages/FurtherReadingFigure";
import { GitSheetFigure } from "./figures/pages/GitSheetFigure";
import { GlossaryMapFigure } from "./figures/pages/GlossaryMapFigure";
import { LaunchListFigure } from "./figures/pages/LaunchListFigure";
import { PromptCardFigure } from "./figures/pages/PromptCardFigure";
import { SecurityListFigure } from "./figures/pages/SecurityListFigure";
import { StatusSheetFigure } from "./figures/pages/StatusSheetFigure";
import { PreCommitFigure } from "./figures/pages/PreCommitFigure";
import { ReviewListFigure } from "./figures/pages/ReviewListFigure";
import { RuleToCheckFigure } from "./figures/pages/RuleToCheckFigure";
import { RuleVsCheckFigure } from "./figures/pages/RuleVsCheckFigure";
import { SecretScanFigure } from "./figures/pages/SecretScanFigure";
import { PlanBuildReviewFigure } from "./figures/pages/PlanBuildReviewFigure";
import { StrongFastFigure } from "./figures/pages/StrongFastFigure";
import { RetryBlockedFigure } from "./figures/pages/RetryBlockedFigure";
import { ScopeLimitFigure } from "./figures/pages/ScopeLimitFigure";
import { SmallTaskFigure } from "./figures/pages/SmallTaskFigure";
import { SpecFirstFigure } from "./figures/pages/SpecFirstFigure";
import { StopHookFigure } from "./figures/pages/StopHookFigure";
import { PickFrameworkFigure } from "./figures/pages/PickFrameworkFigure";
import { PropsStateFigure } from "./figures/pages/PropsStateFigure";
import { ReactHooksFigure } from "./figures/pages/ReactHooksFigure";
import { ServerClientFigure } from "./figures/pages/ServerClientFigure";
import { VueSvelteFigure } from "./figures/pages/VueSvelteFigure";
import { WhyFrameworksFigure } from "./figures/pages/WhyFrameworksFigure";
import { TestLiveFigure } from "./figures/pages/TestLiveFigure";
import { ValidateInputFigure } from "./figures/pages/ValidateInputFigure";
import { WebhookOnceFigure } from "./figures/pages/WebhookOnceFigure";
import { SqlStatementsFigure } from "./figures/pages/SqlStatementsFigure";
import { SqlVsDocumentFigure } from "./figures/pages/SqlVsDocumentFigure";
import { SupabasePostgresFigure } from "./figures/pages/SupabasePostgresFigure";
import { TableKeysFigure } from "./figures/pages/TableKeysFigure";
import { TwoEndpointsFigure } from "./figures/pages/TwoEndpointsFigure";
import { RequestResponseFigure } from "./figures/pages/RequestResponseFigure";
import { ServerJobsFigure } from "./figures/pages/ServerJobsFigure";
import { StackLogsFigure } from "./figures/pages/StackLogsFigure";
import { BadPromptsFigure } from "./figures/pages/BadPromptsFigure";
import { ClaudeCodeSessionFigure } from "./figures/pages/ClaudeCodeSessionFigure";
import { CleanFolderFigure } from "./figures/pages/CleanFolderFigure";
import { CodingToolLoopFigure } from "./figures/pages/CodingToolLoopFigure";
import { CursorRulesFigure } from "./figures/pages/CursorRulesFigure";
import { DiffReviewFigure } from "./figures/pages/DiffReviewFigure";
import { EditorVsTerminalFigure } from "./figures/pages/EditorVsTerminalFigure";
import { ModelPickerFigure } from "./figures/pages/ModelPickerFigure";
import { Part3RecapFigure } from "./figures/pages/Part3RecapFigure";
import { ToolChoiceMatrixFigure } from "./figures/pages/ToolChoiceMatrixFigure";
import { UsageLimitFigure } from "./figures/pages/UsageLimitFigure";
import { VsCodeSurfacesFigure } from "./figures/pages/VsCodeSurfacesFigure";
import { ChatVsApiFigure } from "./figures/pages/ChatVsApiFigure";
import { CodePromptFigure } from "./figures/pages/CodePromptFigure";
import { FewShotFigure } from "./figures/pages/FewShotFigure";
import { JsonShapeFigure } from "./figures/pages/JsonShapeFigure";
import { Part2RecapFigure } from "./figures/pages/Part2RecapFigure";
import { PlanFirstFigure } from "./figures/pages/PlanFirstFigure";
import { PromptAnatomyFigure } from "./figures/pages/PromptAnatomyFigure";
import { PromptInjectionFigure } from "./figures/pages/PromptInjectionFigure";
import { RightContextFigure } from "./figures/pages/RightContextFigure";
import { SecondPromptFigure } from "./figures/pages/SecondPromptFigure";
import { SystemPromptFigure } from "./figures/pages/SystemPromptFigure";
import { TemplateLibraryFigure } from "./figures/pages/TemplateLibraryFigure";
import { ContextWindowFigure } from "./figures/pages/ContextWindowFigure";
import { CourseMapFigure } from "./figures/pages/CourseMapFigure";
import { GenerateVsRetrieveFigure } from "./figures/pages/GenerateVsRetrieveFigure";
import { HallucinationCheckFigure } from "./figures/pages/HallucinationCheckFigure";
import { ModelFamiliesFigure } from "./figures/pages/ModelFamiliesFigure";
import { ModalityMatrixFigure } from "./figures/pages/ModalityMatrixFigure";
import { NoMemoryFigure } from "./figures/pages/NoMemoryFigure";
import { Part1RecapFigure } from "./figures/pages/Part1RecapFigure";
import { ReadPathsFigure } from "./figures/pages/ReadPathsFigure";
import { RestMethodsFigure } from "./figures/pages/RestMethodsFigure";
import { TokenLoopFigure } from "./figures/pages/TokenLoopFigure";
import { TokenPriceFigure } from "./figures/pages/TokenPriceFigure";
import { ToolCallFigure } from "./figures/pages/ToolCallFigure";
import { TrainingVsUseFigure } from "./figures/pages/TrainingVsUseFigure";
import { WhatYouNeedFigure } from "./figures/pages/WhatYouNeedFigure";
import { WhoThisIsForFigure } from "./figures/pages/WhoThisIsForFigure";
import {
  Annotated,
  Compare,
  Flow,
  Matrix,
  Sequence,
  Stack,
  Timeline,
  Tree,
} from "./figures/primitives";

export function Hook({ children }: { children: ReactNode }) {
  return <div className="hook">{children}</div>;
}

export function Mistake({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 rounded-xl border border-clay/40 bg-clay-soft px-5 py-4">
      <p className="font-sans text-sm font-semibold uppercase tracking-wide text-clay">Common mistake</p>
      <div className="mt-2">{children}</div>
    </aside>
  );
}

export function TryIt({ minutes = 5, children }: { minutes?: number; children: ReactNode }) {
  return (
    <section className="my-8 rounded-xl border border-pine/30 bg-pine-soft px-5 py-4">
      <h2 className="mt-0 font-sans text-lg">Try it ({minutes} minutes)</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}

export function Callout({
  type = "note",
  children,
}: {
  type?: "note" | "warn";
  children: ReactNode;
}) {
  const warn = type === "warn";
  return (
    <aside className={`my-6 rounded-xl border px-5 py-4 ${warn ? "border-clay/40 bg-clay-soft" : "border-line bg-paper-2"}`}>
      <p className={`font-sans text-sm font-semibold uppercase tracking-wide ${warn ? "text-clay" : "text-pine"}`}>
        {warn ? "Watch out" : "Note"}
      </p>
      <div className="mt-2">{children}</div>
    </aside>
  );
}

export function Code({
  filename,
  source = "",
  children,
}: {
  filename?: string;
  source?: string;
  children?: ReactNode;
}) {
  const fromChildren = typeof children === "string" ? children : "";
  const text = (source || fromChildren).replace(/^\n/, "").replace(/\s+$/, "");
  return (
    <div className="my-5">
      {filename ? <p className="mb-1 font-sans text-sm font-semibold text-ink-soft">{filename}</p> : null}
      <pre>
        <code>{text}</code>
      </pre>
    </div>
  );
}

export function Term({ id, children }: { id: string; children: ReactNode }) {
  return (
    <Link href={`/glossary#${id}`} className="font-semibold">
      {children}
    </Link>
  );
}

export const mdxComponents = {
  Hook,
  Mistake,
  TryIt,
  Callout,
  Code,
  Term,
  Quiz,
  Flow,
  Sequence,
  Stack,
  Compare,
  Annotated,
  Tree,
  Timeline,
  Matrix,
  RestMethodsFigure,
  WhoThisIsForFigure,
  ReadPathsFigure,
  CourseMapFigure,
  WhatYouNeedFigure,
  GenerateVsRetrieveFigure,
  TokenLoopFigure,
  TrainingVsUseFigure,
  HallucinationCheckFigure,
  ContextWindowFigure,
  NoMemoryFigure,
  ModalityMatrixFigure,
  ModelFamiliesFigure,
  TokenPriceFigure,
  ChatVsApiFigure,
  ToolCallFigure,
  Part1RecapFigure,
  PromptAnatomyFigure,
  FewShotFigure,
  JsonShapeFigure,
  PlanFirstFigure,
  RightContextFigure,
  SecondPromptFigure,
  SystemPromptFigure,
  CodePromptFigure,
  BadPromptsFigure,
  PromptInjectionFigure,
  TemplateLibraryFigure,
  Part2RecapFigure,
  CodingToolLoopFigure,
  EditorVsTerminalFigure,
  VsCodeSurfacesFigure,
  CursorRulesFigure,
  AntigravitySurfacesFigure,
  ClaudeCodeSessionFigure,
  ToolChoiceMatrixFigure,
  ModelPickerFigure,
  CleanFolderFigure,
  DiffReviewFigure,
  UsageLimitFigure,
  Part3RecapFigure,
  VibeOriginFigure,
  VibeLoopFigure,
  VibeFitsFigure,
  NinetyWallFigure,
  GitUndoFigure,
  SmallAskFigure,
  BugReportFigure,
  ReadGeneratedCodeFigure,
  PrototypeGapFigure,
  VibeToEngineeringFigure,
  Part4RecapFigure,
  WhyInstructionsFigure,
  RulesFilesFigure,
  RulesContentsFigure,
  SkillFileFigure,
  SlashCommandFigure,
  SpecTruthFigure,
  TaskCardFigure,
  ShortRulesFigure,
  RuleConflictFigure,
  StarterKitFigure,
  Part5RecapFigure,
  OpenWebsiteFigure,
  ClientServerFigure,
  HtmlCssJsFigure,
  ServerJobsFigure,
  RequestResponseFigure,
  HostingFigure,
  EnvironmentsFigure,
  FullStackMapFigure,
  FakeBackendFigure,
  ButtonClickFigure,
  StackLogsFigure,
  Part6RecapFigure,
  ApiContractFigure,
  JsonTypesFigure,
  FetchStepsFigure,
  TwoEndpointsFigure,
  AuthHeaderFigure,
  TableKeysFigure,
  SqlStatementsFigure,
  MigrationFileFigure,
  SupabasePostgresFigure,
  SqlVsDocumentFigure,
  Part7RecapFigure,
  EnvFileFigure,
  AuthMethodsFigure,
  AuthzCheckFigure,
  ValidateInputFigure,
  OwaspMapFigure,
  HttpsCorsFigure,
  AiRiskFigure,
  GatewayFigure,
  CardBoundaryFigure,
  WebhookOnceFigure,
  TestLiveFigure,
  Part8RecapFigure,
  WhyFrameworksFigure,
  ComponentTreeFigure,
  PropsStateFigure,
  ReactHooksFigure,
  AppRouterFilesFigure,
  ServerClientFigure,
  LoadingFetchFigure,
  FormActionFigure,
  AngularSignalFigure,
  VueSvelteFigure,
  PickFrameworkFigure,
  Part9RecapFigure,
  OnePromptFigure,
  LoopStepsFigure,
  SpecFirstFigure,
  SmallTaskFigure,
  LockedTestFigure,
  GateCheckFigure,
  StopHookFigure,
  MakerCheckerFigure,
  RetryBlockedFigure,
  ScopeLimitFigure,
  ParallelAgentsFigure,
  Part10RecapFigure,
  StrongFastFigure,
  CostTriangleFigure,
  PlanBuildReviewFigure,
  ModelSplitFigure,
  CrossReviewFigure,
  EscalateModelFigure,
  BenchmarkTrapFigure,
  DayWorkflowFigure,
  MixFailuresFigure,
  Part11RecapFigure,
  RuleVsCheckFigure,
  LintFormatTypeFigure,
  ActionsGateFigure,
  PreCommitFigure,
  AgentHookPlaceFigure,
  LockedFileFigure,
  SecretScanFigure,
  ReviewListFigure,
  RuleToCheckFigure,
  Part12RecapFigure,
  GlossaryMapFigure,
  PromptCardFigure,
  GitSheetFigure,
  StatusSheetFigure,
  SecurityListFigure,
  LaunchListFigure,
  CapstoneFigure,
  FurtherReadingFigure,
};
