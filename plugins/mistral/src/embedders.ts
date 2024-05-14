/**
 * Copyright 2024 The Fire Company
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import { defineEmbedder, embedderRef } from '@genkit-ai/ai/embedder';
import { z } from 'zod';
export const TextEmbeddingConfigSchema = z.object({
    dimensions: z.number().optional(),
    encodingFormat: z.union([z.literal('float'), z.literal('base64')]).optional(),
  });

  
export const mistralembed = embedderRef({
    name: 'mistral/mistral-embed',
    configSchema: TextEmbeddingConfigSchema,
    info: {
        dimensions: 1024,
        label: 'Mistral - Mistral Embed',
        supports: {
        input: ['text'],
        },
    },
    });
export const SUPPORTED_EMBEDDING_MODELS = {
    'mistral-embed': mistralembed
}