import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { xai } from '@ai-sdk/xai';
import { anthropic } from "@ai-sdk/anthropic"
import { fireworks } from '@ai-sdk/fireworks';
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const DEFAULT_CHAT_MODEL: string = 'chat-model-small';

export const myProvider = customProvider({
  languageModels: {
    'chat-model-small': openai('gpt-4o-mini'),
    'chat-model-large': openai('gpt-4o'),
    'chat-model-gemini': google('gemini-2.0-flash-001'),
    'chat-model-claude': anthropic('claude-3-5-haiku-latest'),
    'chat-model-xai': xai('grok-2-1212'),
    'chat-model-reasoning': wrapLanguageModel({
      model: fireworks('accounts/fireworks/models/deepseek-r1'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'title-model': openai('gpt-4-turbo'),
    'block-model': openai('gpt-4o-mini'),
  },
  imageModels: {
    'small-model': openai.image('dall-e-2'),
    'large-model': openai.image('dall-e-3'),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model-small',
    name: 'OpenAI Small model',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'chat-model-large',
    name: 'OpenAI Large model',
    description: 'Large model for complex, multi-step tasks',
  },
  {
    id: 'chat-model-gemini',
    name: 'Google Gemini model',
    description: 'Gemini model for complex, multi-step tasks',
  },
  {
    id: 'chat-model-claude',
    name: 'Anthropic Claude model',
    description: 'Claude model for complex, multi-step tasks',
  },
  {
    id: 'chat-model-xai',
    name: 'xAI Grok model',
    description: 'Grok model for complex, multi-step tasks',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning',
  },
];
