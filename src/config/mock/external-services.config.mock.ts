/*
 * SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { registerAs } from '@nestjs/config';

import { ExternalServicesConfig } from '../external-services.config';

export default registerAs(
  'externalServicesConfig',
  (): ExternalServicesConfig => ({
    plantUmlServer: 'https://plantuml.example.com',
    imageProxy: 'https://imageProxy.example.com',
  }),
);
