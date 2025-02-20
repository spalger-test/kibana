/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { IndicesGetMappingIndexMappingRecord } from '@elastic/elasticsearch/lib/api/types';

export const alerts: Record<string, IndicesGetMappingIndexMappingRecord> = {
  '.internal.alerts-security.alerts-default-000001': {
    mappings: {
      dynamic: 'false',
      _meta: {
        namespace: 'default',
        kibana: {
          version: '8.6.0',
        },
      },
      properties: {
        '@timestamp': {
          type: 'date',
        },
        agent: {
          properties: {
            build: {
              properties: {
                original: {
                  type: 'keyword',
                },
              },
            },
            ephemeral_id: {
              type: 'keyword',
            },
            id: {
              type: 'keyword',
            },
            name: {
              type: 'keyword',
            },
            type: {
              type: 'keyword',
            },
            version: {
              type: 'keyword',
            },
          },
        },
        client: {
          properties: {
            address: {
              type: 'keyword',
            },
            as: {
              properties: {
                number: {
                  type: 'long',
                },
                organization: {
                  properties: {
                    name: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
            bytes: {
              type: 'long',
            },
            domain: {
              type: 'keyword',
            },
            geo: {
              properties: {
                city_name: {
                  type: 'keyword',
                },
                continent_code: {
                  type: 'keyword',
                },
                continent_name: {
                  type: 'keyword',
                },
                country_iso_code: {
                  type: 'keyword',
                },
                country_name: {
                  type: 'keyword',
                },
                location: {
                  type: 'geo_point',
                },
                name: {
                  type: 'keyword',
                },
                postal_code: {
                  type: 'keyword',
                },
                region_iso_code: {
                  type: 'keyword',
                },
                region_name: {
                  type: 'keyword',
                },
                timezone: {
                  type: 'keyword',
                },
              },
            },
            ip: {
              type: 'ip',
            },
            mac: {
              type: 'keyword',
            },
            nat: {
              properties: {
                ip: {
                  type: 'ip',
                },
                port: {
                  type: 'long',
                },
              },
            },
            packets: {
              type: 'long',
            },
            port: {
              type: 'long',
            },
            registered_domain: {
              type: 'keyword',
            },
            subdomain: {
              type: 'keyword',
            },
            top_level_domain: {
              type: 'keyword',
            },
            user: {
              properties: {
                domain: {
                  type: 'keyword',
                },
                email: {
                  type: 'keyword',
                },
                full_name: {
                  type: 'keyword',
                },
                group: {
                  properties: {
                    domain: {
                      type: 'keyword',
                    },
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                hash: {
                  type: 'keyword',
                },
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                roles: {
                  type: 'keyword',
                },
              },
            },
          },
        },
        cloud: {
          properties: {
            account: {
              properties: {
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
              },
            },
            availability_zone: {
              type: 'keyword',
            },
            instance: {
              properties: {
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
              },
            },
            machine: {
              properties: {
                type: {
                  type: 'keyword',
                },
              },
            },
            origin: {
              properties: {
                account: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                availability_zone: {
                  type: 'keyword',
                },
                instance: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                machine: {
                  properties: {
                    type: {
                      type: 'keyword',
                    },
                  },
                },
                project: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                provider: {
                  type: 'keyword',
                },
                region: {
                  type: 'keyword',
                },
                service: {
                  properties: {
                    name: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
            project: {
              properties: {
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
              },
            },
            provider: {
              type: 'keyword',
            },
            region: {
              type: 'keyword',
            },
            service: {
              properties: {
                name: {
                  type: 'keyword',
                },
              },
            },
            target: {
              properties: {
                account: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                availability_zone: {
                  type: 'keyword',
                },
                instance: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                machine: {
                  properties: {
                    type: {
                      type: 'keyword',
                    },
                  },
                },
                project: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                provider: {
                  type: 'keyword',
                },
                region: {
                  type: 'keyword',
                },
                service: {
                  properties: {
                    name: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
          },
        },
        container: {
          properties: {
            id: {
              type: 'keyword',
            },
            image: {
              properties: {
                name: {
                  type: 'keyword',
                },
                tag: {
                  type: 'keyword',
                },
              },
            },
            labels: {
              type: 'object',
            },
            name: {
              type: 'keyword',
            },
            runtime: {
              type: 'keyword',
            },
          },
        },
        destination: {
          properties: {
            address: {
              type: 'keyword',
            },
            as: {
              properties: {
                number: {
                  type: 'long',
                },
                organization: {
                  properties: {
                    name: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
            bytes: {
              type: 'long',
            },
            domain: {
              type: 'keyword',
            },
            geo: {
              properties: {
                city_name: {
                  type: 'keyword',
                },
                continent_code: {
                  type: 'keyword',
                },
                continent_name: {
                  type: 'keyword',
                },
                country_iso_code: {
                  type: 'keyword',
                },
                country_name: {
                  type: 'keyword',
                },
                location: {
                  type: 'geo_point',
                },
                name: {
                  type: 'keyword',
                },
                postal_code: {
                  type: 'keyword',
                },
                region_iso_code: {
                  type: 'keyword',
                },
                region_name: {
                  type: 'keyword',
                },
                timezone: {
                  type: 'keyword',
                },
              },
            },
            ip: {
              type: 'ip',
            },
            mac: {
              type: 'keyword',
            },
            nat: {
              properties: {
                ip: {
                  type: 'ip',
                },
                port: {
                  type: 'long',
                },
              },
            },
            packets: {
              type: 'long',
            },
            port: {
              type: 'long',
            },
            registered_domain: {
              type: 'keyword',
            },
            subdomain: {
              type: 'keyword',
            },
            top_level_domain: {
              type: 'keyword',
            },
            user: {
              properties: {
                domain: {
                  type: 'keyword',
                },
                email: {
                  type: 'keyword',
                },
                full_name: {
                  type: 'keyword',
                },
                group: {
                  properties: {
                    domain: {
                      type: 'keyword',
                    },
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                hash: {
                  type: 'keyword',
                },
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                roles: {
                  type: 'keyword',
                },
              },
            },
          },
        },
        dll: {
          properties: {
            code_signature: {
              properties: {
                digest_algorithm: {
                  type: 'keyword',
                },
                exists: {
                  type: 'boolean',
                },
                signing_id: {
                  type: 'keyword',
                },
                status: {
                  type: 'keyword',
                },
                subject_name: {
                  type: 'keyword',
                },
                team_id: {
                  type: 'keyword',
                },
                timestamp: {
                  type: 'date',
                },
                trusted: {
                  type: 'boolean',
                },
                valid: {
                  type: 'boolean',
                },
              },
            },
            hash: {
              properties: {
                md5: {
                  type: 'keyword',
                },
                sha1: {
                  type: 'keyword',
                },
                sha256: {
                  type: 'keyword',
                },
                sha512: {
                  type: 'keyword',
                },
                ssdeep: {
                  type: 'keyword',
                },
              },
            },
            name: {
              type: 'keyword',
            },
            path: {
              type: 'keyword',
            },
            pe: {
              properties: {
                architecture: {
                  type: 'keyword',
                },
                company: {
                  type: 'keyword',
                },
                description: {
                  type: 'keyword',
                },
                file_version: {
                  type: 'keyword',
                },
                imphash: {
                  type: 'keyword',
                },
                original_file_name: {
                  type: 'keyword',
                },
                product: {
                  type: 'keyword',
                },
              },
            },
          },
        },
        dns: {
          properties: {
            answers: {
              properties: {
                class: {
                  type: 'keyword',
                },
                data: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                ttl: {
                  type: 'long',
                },
                type: {
                  type: 'keyword',
                },
              },
            },
            header_flags: {
              type: 'keyword',
            },
            id: {
              type: 'keyword',
            },
            op_code: {
              type: 'keyword',
            },
            question: {
              properties: {
                class: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                registered_domain: {
                  type: 'keyword',
                },
                subdomain: {
                  type: 'keyword',
                },
                top_level_domain: {
                  type: 'keyword',
                },
                type: {
                  type: 'keyword',
                },
              },
            },
            resolved_ip: {
              type: 'ip',
            },
            response_code: {
              type: 'keyword',
            },
            type: {
              type: 'keyword',
            },
          },
        },
        ecs: {
          properties: {
            version: {
              type: 'keyword',
            },
          },
        },
        error: {
          properties: {
            code: {
              type: 'keyword',
            },
            id: {
              type: 'keyword',
            },
            message: {
              type: 'match_only_text',
            },
            stack_trace: {
              type: 'wildcard',
            },
            type: {
              type: 'keyword',
            },
          },
        },
        event: {
          properties: {
            action: {
              type: 'keyword',
            },
            agent_id_status: {
              type: 'keyword',
            },
            category: {
              type: 'keyword',
            },
            code: {
              type: 'keyword',
            },
            created: {
              type: 'date',
            },
            dataset: {
              type: 'keyword',
            },
            duration: {
              type: 'long',
            },
            end: {
              type: 'date',
            },
            hash: {
              type: 'keyword',
            },
            id: {
              type: 'keyword',
            },
            ingested: {
              type: 'date',
            },
            kind: {
              type: 'keyword',
            },
            module: {
              type: 'keyword',
            },
            original: {
              type: 'keyword',
            },
            outcome: {
              type: 'keyword',
            },
            provider: {
              type: 'keyword',
            },
            reason: {
              type: 'keyword',
            },
            reference: {
              type: 'keyword',
            },
            risk_score: {
              type: 'float',
            },
            risk_score_norm: {
              type: 'float',
            },
            sequence: {
              type: 'long',
            },
            severity: {
              type: 'long',
            },
            start: {
              type: 'date',
            },
            timezone: {
              type: 'keyword',
            },
            type: {
              type: 'keyword',
            },
            url: {
              type: 'keyword',
            },
          },
        },
        faas: {
          properties: {
            coldstart: {
              type: 'boolean',
            },
            execution: {
              type: 'keyword',
            },
            trigger: {
              type: 'nested',
              properties: {
                request_id: {
                  type: 'keyword',
                },
                type: {
                  type: 'keyword',
                },
              },
            },
          },
        },
        file: {
          properties: {
            accessed: {
              type: 'date',
            },
            attributes: {
              type: 'keyword',
            },
            code_signature: {
              properties: {
                digest_algorithm: {
                  type: 'keyword',
                },
                exists: {
                  type: 'boolean',
                },
                signing_id: {
                  type: 'keyword',
                },
                status: {
                  type: 'keyword',
                },
                subject_name: {
                  type: 'keyword',
                },
                team_id: {
                  type: 'keyword',
                },
                timestamp: {
                  type: 'date',
                },
                trusted: {
                  type: 'boolean',
                },
                valid: {
                  type: 'boolean',
                },
              },
            },
            created: {
              type: 'date',
            },
            ctime: {
              type: 'date',
            },
            device: {
              type: 'keyword',
            },
            directory: {
              type: 'keyword',
            },
            drive_letter: {
              type: 'keyword',
            },
            elf: {
              properties: {
                architecture: {
                  type: 'keyword',
                },
                byte_order: {
                  type: 'keyword',
                },
                cpu_type: {
                  type: 'keyword',
                },
                creation_date: {
                  type: 'date',
                },
                exports: {
                  type: 'flattened',
                },
                header: {
                  properties: {
                    abi_version: {
                      type: 'keyword',
                    },
                    class: {
                      type: 'keyword',
                    },
                    data: {
                      type: 'keyword',
                    },
                    entrypoint: {
                      type: 'long',
                    },
                    object_version: {
                      type: 'keyword',
                    },
                    os_abi: {
                      type: 'keyword',
                    },
                    type: {
                      type: 'keyword',
                    },
                    version: {
                      type: 'keyword',
                    },
                  },
                },
                imports: {
                  type: 'flattened',
                },
                sections: {
                  type: 'nested',
                  properties: {
                    chi2: {
                      type: 'long',
                    },
                    entropy: {
                      type: 'long',
                    },
                    flags: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                    physical_offset: {
                      type: 'keyword',
                    },
                    physical_size: {
                      type: 'long',
                    },
                    type: {
                      type: 'keyword',
                    },
                    virtual_address: {
                      type: 'long',
                    },
                    virtual_size: {
                      type: 'long',
                    },
                  },
                },
                segments: {
                  type: 'nested',
                  properties: {
                    sections: {
                      type: 'keyword',
                    },
                    type: {
                      type: 'keyword',
                    },
                  },
                },
                shared_libraries: {
                  type: 'keyword',
                },
                telfhash: {
                  type: 'keyword',
                },
              },
            },
            extension: {
              type: 'keyword',
            },
            fork_name: {
              type: 'keyword',
            },
            gid: {
              type: 'keyword',
            },
            group: {
              type: 'keyword',
            },
            hash: {
              properties: {
                md5: {
                  type: 'keyword',
                },
                sha1: {
                  type: 'keyword',
                },
                sha256: {
                  type: 'keyword',
                },
                sha512: {
                  type: 'keyword',
                },
                ssdeep: {
                  type: 'keyword',
                },
              },
            },
            inode: {
              type: 'keyword',
            },
            mime_type: {
              type: 'keyword',
            },
            mode: {
              type: 'keyword',
            },
            mtime: {
              type: 'date',
            },
            name: {
              type: 'keyword',
            },
            owner: {
              type: 'keyword',
            },
            path: {
              type: 'keyword',
            },
            pe: {
              properties: {
                architecture: {
                  type: 'keyword',
                },
                company: {
                  type: 'keyword',
                },
                description: {
                  type: 'keyword',
                },
                file_version: {
                  type: 'keyword',
                },
                imphash: {
                  type: 'keyword',
                },
                original_file_name: {
                  type: 'keyword',
                },
                product: {
                  type: 'keyword',
                },
              },
            },
            size: {
              type: 'long',
            },
            target_path: {
              type: 'keyword',
            },
            type: {
              type: 'keyword',
            },
            uid: {
              type: 'keyword',
            },
            x509: {
              properties: {
                alternative_names: {
                  type: 'keyword',
                },
                issuer: {
                  properties: {
                    common_name: {
                      type: 'keyword',
                    },
                    country: {
                      type: 'keyword',
                    },
                    distinguished_name: {
                      type: 'keyword',
                    },
                    locality: {
                      type: 'keyword',
                    },
                    organization: {
                      type: 'keyword',
                    },
                    organizational_unit: {
                      type: 'keyword',
                    },
                    state_or_province: {
                      type: 'keyword',
                    },
                  },
                },
                not_after: {
                  type: 'date',
                },
                not_before: {
                  type: 'date',
                },
                public_key_algorithm: {
                  type: 'keyword',
                },
                public_key_curve: {
                  type: 'keyword',
                },
                public_key_exponent: {
                  type: 'long',
                },
                public_key_size: {
                  type: 'long',
                },
                serial_number: {
                  type: 'keyword',
                },
                signature_algorithm: {
                  type: 'keyword',
                },
                subject: {
                  properties: {
                    common_name: {
                      type: 'keyword',
                    },
                    country: {
                      type: 'keyword',
                    },
                    distinguished_name: {
                      type: 'keyword',
                    },
                    locality: {
                      type: 'keyword',
                    },
                    organization: {
                      type: 'keyword',
                    },
                    organizational_unit: {
                      type: 'keyword',
                    },
                    state_or_province: {
                      type: 'keyword',
                    },
                  },
                },
                version_number: {
                  type: 'keyword',
                },
              },
            },
          },
        },
        group: {
          properties: {
            domain: {
              type: 'keyword',
            },
            id: {
              type: 'keyword',
            },
            name: {
              type: 'keyword',
            },
          },
        },
        host: {
          properties: {
            architecture: {
              type: 'keyword',
            },
            boot: {
              properties: {
                id: {
                  type: 'keyword',
                },
              },
            },
            cpu: {
              properties: {
                usage: {
                  type: 'scaled_float',
                  scaling_factor: 1000,
                },
              },
            },
            disk: {
              properties: {
                read: {
                  properties: {
                    bytes: {
                      type: 'long',
                    },
                  },
                },
                write: {
                  properties: {
                    bytes: {
                      type: 'long',
                    },
                  },
                },
              },
            },
            domain: {
              type: 'keyword',
            },
            geo: {
              properties: {
                city_name: {
                  type: 'keyword',
                },
                continent_code: {
                  type: 'keyword',
                },
                continent_name: {
                  type: 'keyword',
                },
                country_iso_code: {
                  type: 'keyword',
                },
                country_name: {
                  type: 'keyword',
                },
                location: {
                  type: 'geo_point',
                },
                name: {
                  type: 'keyword',
                },
                postal_code: {
                  type: 'keyword',
                },
                region_iso_code: {
                  type: 'keyword',
                },
                region_name: {
                  type: 'keyword',
                },
                timezone: {
                  type: 'keyword',
                },
              },
            },
            hostname: {
              type: 'keyword',
            },
            id: {
              type: 'keyword',
            },
            ip: {
              type: 'ip',
            },
            mac: {
              type: 'keyword',
            },
            name: {
              type: 'keyword',
            },
            network: {
              properties: {
                egress: {
                  properties: {
                    bytes: {
                      type: 'long',
                    },
                    packets: {
                      type: 'long',
                    },
                  },
                },
                ingress: {
                  properties: {
                    bytes: {
                      type: 'long',
                    },
                    packets: {
                      type: 'long',
                    },
                  },
                },
              },
            },
            os: {
              properties: {
                family: {
                  type: 'keyword',
                },
                full: {
                  type: 'keyword',
                },
                kernel: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                platform: {
                  type: 'keyword',
                },
                type: {
                  type: 'keyword',
                },
                version: {
                  type: 'keyword',
                },
              },
            },
            pid_ns_ino: {
              type: 'keyword',
            },
            risk: {
              properties: {
                calculated_level: {
                  type: 'keyword',
                },
                calculated_score: {
                  type: 'float',
                },
                calculated_score_norm: {
                  type: 'float',
                },
                static_level: {
                  type: 'keyword',
                },
                static_score: {
                  type: 'float',
                },
                static_score_norm: {
                  type: 'float',
                },
              },
            },
            type: {
              type: 'keyword',
            },
            uptime: {
              type: 'long',
            },
          },
        },
        http: {
          properties: {
            request: {
              properties: {
                body: {
                  properties: {
                    bytes: {
                      type: 'long',
                    },
                    content: {
                      type: 'wildcard',
                    },
                  },
                },
                bytes: {
                  type: 'long',
                },
                id: {
                  type: 'keyword',
                },
                method: {
                  type: 'keyword',
                },
                mime_type: {
                  type: 'keyword',
                },
                referrer: {
                  type: 'keyword',
                },
              },
            },
            response: {
              properties: {
                body: {
                  properties: {
                    bytes: {
                      type: 'long',
                    },
                    content: {
                      type: 'wildcard',
                    },
                  },
                },
                bytes: {
                  type: 'long',
                },
                mime_type: {
                  type: 'keyword',
                },
                status_code: {
                  type: 'long',
                },
              },
            },
            version: {
              type: 'keyword',
            },
          },
        },
        kibana: {
          properties: {
            alert: {
              properties: {
                action_group: {
                  type: 'keyword',
                },
                ancestors: {
                  properties: {
                    depth: {
                      type: 'long',
                    },
                    id: {
                      type: 'keyword',
                    },
                    index: {
                      type: 'keyword',
                    },
                    rule: {
                      type: 'keyword',
                    },
                    type: {
                      type: 'keyword',
                    },
                  },
                },
                building_block_type: {
                  type: 'keyword',
                },
                depth: {
                  type: 'long',
                },
                duration: {
                  properties: {
                    us: {
                      type: 'long',
                    },
                  },
                },
                end: {
                  type: 'date',
                },
                group: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    index: {
                      type: 'integer',
                    },
                  },
                },
                instance: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                  },
                },
                new_terms: {
                  type: 'keyword',
                },
                original_event: {
                  properties: {
                    action: {
                      type: 'keyword',
                    },
                    agent_id_status: {
                      type: 'keyword',
                    },
                    category: {
                      type: 'keyword',
                    },
                    code: {
                      type: 'keyword',
                    },
                    created: {
                      type: 'date',
                    },
                    dataset: {
                      type: 'keyword',
                    },
                    duration: {
                      type: 'keyword',
                    },
                    end: {
                      type: 'date',
                    },
                    hash: {
                      type: 'keyword',
                    },
                    id: {
                      type: 'keyword',
                    },
                    ingested: {
                      type: 'date',
                    },
                    kind: {
                      type: 'keyword',
                    },
                    module: {
                      type: 'keyword',
                    },
                    original: {
                      type: 'keyword',
                    },
                    outcome: {
                      type: 'keyword',
                    },
                    provider: {
                      type: 'keyword',
                    },
                    reason: {
                      type: 'keyword',
                    },
                    reference: {
                      type: 'keyword',
                    },
                    risk_score: {
                      type: 'float',
                    },
                    risk_score_norm: {
                      type: 'float',
                    },
                    sequence: {
                      type: 'long',
                    },
                    severity: {
                      type: 'long',
                    },
                    start: {
                      type: 'date',
                    },
                    timezone: {
                      type: 'keyword',
                    },
                    type: {
                      type: 'keyword',
                    },
                    url: {
                      type: 'keyword',
                    },
                  },
                },
                original_time: {
                  type: 'date',
                },
                reason: {
                  type: 'keyword',
                },
                risk_score: {
                  type: 'float',
                },
                rule: {
                  properties: {
                    author: {
                      type: 'keyword',
                    },
                    building_block_type: {
                      type: 'keyword',
                    },
                    category: {
                      type: 'keyword',
                    },
                    consumer: {
                      type: 'keyword',
                    },
                    created_at: {
                      type: 'date',
                    },
                    created_by: {
                      type: 'keyword',
                    },
                    description: {
                      type: 'keyword',
                    },
                    enabled: {
                      type: 'keyword',
                    },
                    exceptions_list: {
                      type: 'object',
                    },
                    execution: {
                      properties: {
                        uuid: {
                          type: 'keyword',
                        },
                      },
                    },
                    false_positives: {
                      type: 'keyword',
                    },
                    from: {
                      type: 'keyword',
                    },
                    immutable: {
                      type: 'keyword',
                    },
                    interval: {
                      type: 'keyword',
                    },
                    license: {
                      type: 'keyword',
                    },
                    max_signals: {
                      type: 'long',
                    },
                    name: {
                      type: 'keyword',
                    },
                    note: {
                      type: 'keyword',
                    },
                    parameters: {
                      type: 'flattened',
                      ignore_above: 4096,
                    },
                    producer: {
                      type: 'keyword',
                    },
                    references: {
                      type: 'keyword',
                    },
                    rule_id: {
                      type: 'keyword',
                    },
                    rule_name_override: {
                      type: 'keyword',
                    },
                    rule_type_id: {
                      type: 'keyword',
                    },
                    tags: {
                      type: 'keyword',
                    },
                    threat: {
                      properties: {
                        framework: {
                          type: 'keyword',
                        },
                        tactic: {
                          properties: {
                            id: {
                              type: 'keyword',
                            },
                            name: {
                              type: 'keyword',
                            },
                            reference: {
                              type: 'keyword',
                            },
                          },
                        },
                        technique: {
                          properties: {
                            id: {
                              type: 'keyword',
                            },
                            name: {
                              type: 'keyword',
                            },
                            reference: {
                              type: 'keyword',
                            },
                            subtechnique: {
                              properties: {
                                id: {
                                  type: 'keyword',
                                },
                                name: {
                                  type: 'keyword',
                                },
                                reference: {
                                  type: 'keyword',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    timeline_id: {
                      type: 'keyword',
                    },
                    timeline_title: {
                      type: 'keyword',
                    },
                    timestamp_override: {
                      type: 'keyword',
                    },
                    to: {
                      type: 'keyword',
                    },
                    type: {
                      type: 'keyword',
                    },
                    updated_at: {
                      type: 'date',
                    },
                    updated_by: {
                      type: 'keyword',
                    },
                    uuid: {
                      type: 'keyword',
                    },
                    version: {
                      type: 'keyword',
                    },
                  },
                },
                severity: {
                  type: 'keyword',
                },
                start: {
                  type: 'date',
                },
                status: {
                  type: 'keyword',
                },
                system_status: {
                  type: 'keyword',
                },
                threshold_result: {
                  properties: {
                    cardinality: {
                      properties: {
                        field: {
                          type: 'keyword',
                        },
                        value: {
                          type: 'long',
                        },
                      },
                    },
                    count: {
                      type: 'long',
                    },
                    from: {
                      type: 'date',
                    },
                    terms: {
                      properties: {
                        field: {
                          type: 'keyword',
                        },
                        value: {
                          type: 'keyword',
                        },
                      },
                    },
                  },
                },
                time_range: {
                  type: 'date_range',
                  format: 'epoch_millis||strict_date_optional_time',
                },
                uuid: {
                  type: 'keyword',
                },
                workflow_reason: {
                  type: 'keyword',
                },
                workflow_status: {
                  type: 'keyword',
                },
                workflow_user: {
                  type: 'keyword',
                },
              },
            },
            space_ids: {
              type: 'keyword',
            },
            version: {
              type: 'version',
            },
          },
        },
        labels: {
          type: 'object',
        },
        log: {
          properties: {
            file: {
              properties: {
                path: {
                  type: 'keyword',
                },
              },
            },
            level: {
              type: 'keyword',
            },
            logger: {
              type: 'keyword',
            },
            origin: {
              properties: {
                file: {
                  properties: {
                    line: {
                      type: 'long',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                function: {
                  type: 'keyword',
                },
              },
            },
            syslog: {
              properties: {
                facility: {
                  properties: {
                    code: {
                      type: 'long',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                priority: {
                  type: 'long',
                },
                severity: {
                  properties: {
                    code: {
                      type: 'long',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
          },
        },
        message: {
          type: 'match_only_text',
        },
        network: {
          properties: {
            application: {
              type: 'keyword',
            },
            bytes: {
              type: 'long',
            },
            community_id: {
              type: 'keyword',
            },
            direction: {
              type: 'keyword',
            },
            forwarded_ip: {
              type: 'ip',
            },
            iana_number: {
              type: 'keyword',
            },
            inner: {
              properties: {
                vlan: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
            name: {
              type: 'keyword',
            },
            packets: {
              type: 'long',
            },
            protocol: {
              type: 'keyword',
            },
            transport: {
              type: 'keyword',
            },
            type: {
              type: 'keyword',
            },
            vlan: {
              properties: {
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
              },
            },
          },
        },
        observer: {
          properties: {
            egress: {
              properties: {
                interface: {
                  properties: {
                    alias: {
                      type: 'keyword',
                    },
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                vlan: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                zone: {
                  type: 'keyword',
                },
              },
            },
            geo: {
              properties: {
                city_name: {
                  type: 'keyword',
                },
                continent_code: {
                  type: 'keyword',
                },
                continent_name: {
                  type: 'keyword',
                },
                country_iso_code: {
                  type: 'keyword',
                },
                country_name: {
                  type: 'keyword',
                },
                location: {
                  type: 'geo_point',
                },
                name: {
                  type: 'keyword',
                },
                postal_code: {
                  type: 'keyword',
                },
                region_iso_code: {
                  type: 'keyword',
                },
                region_name: {
                  type: 'keyword',
                },
                timezone: {
                  type: 'keyword',
                },
              },
            },
            hostname: {
              type: 'keyword',
            },
            ingress: {
              properties: {
                interface: {
                  properties: {
                    alias: {
                      type: 'keyword',
                    },
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                vlan: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                zone: {
                  type: 'keyword',
                },
              },
            },
            ip: {
              type: 'ip',
            },
            mac: {
              type: 'keyword',
            },
            name: {
              type: 'keyword',
            },
            os: {
              properties: {
                family: {
                  type: 'keyword',
                },
                full: {
                  type: 'keyword',
                },
                kernel: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                platform: {
                  type: 'keyword',
                },
                type: {
                  type: 'keyword',
                },
                version: {
                  type: 'keyword',
                },
              },
            },
            product: {
              type: 'keyword',
            },
            serial_number: {
              type: 'keyword',
            },
            type: {
              type: 'keyword',
            },
            vendor: {
              type: 'keyword',
            },
            version: {
              type: 'keyword',
            },
          },
        },
        orchestrator: {
          properties: {
            api_version: {
              type: 'keyword',
            },
            cluster: {
              properties: {
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                url: {
                  type: 'keyword',
                },
                version: {
                  type: 'keyword',
                },
              },
            },
            namespace: {
              type: 'keyword',
            },
            organization: {
              type: 'keyword',
            },
            resource: {
              properties: {
                id: {
                  type: 'keyword',
                },
                ip: {
                  type: 'ip',
                },
                name: {
                  type: 'keyword',
                },
                parent: {
                  properties: {
                    type: {
                      type: 'keyword',
                    },
                  },
                },
                type: {
                  type: 'keyword',
                },
              },
            },
            type: {
              type: 'keyword',
            },
          },
        },
        organization: {
          properties: {
            id: {
              type: 'keyword',
            },
            name: {
              type: 'keyword',
            },
          },
        },
        package: {
          properties: {
            architecture: {
              type: 'keyword',
            },
            build_version: {
              type: 'keyword',
            },
            checksum: {
              type: 'keyword',
            },
            description: {
              type: 'keyword',
            },
            install_scope: {
              type: 'keyword',
            },
            installed: {
              type: 'date',
            },
            license: {
              type: 'keyword',
            },
            name: {
              type: 'keyword',
            },
            path: {
              type: 'keyword',
            },
            reference: {
              type: 'keyword',
            },
            size: {
              type: 'long',
            },
            type: {
              type: 'keyword',
            },
            version: {
              type: 'keyword',
            },
          },
        },
        process: {
          properties: {
            args: {
              type: 'keyword',
            },
            args_count: {
              type: 'long',
            },
            code_signature: {
              properties: {
                digest_algorithm: {
                  type: 'keyword',
                },
                exists: {
                  type: 'boolean',
                },
                signing_id: {
                  type: 'keyword',
                },
                status: {
                  type: 'keyword',
                },
                subject_name: {
                  type: 'keyword',
                },
                team_id: {
                  type: 'keyword',
                },
                timestamp: {
                  type: 'date',
                },
                trusted: {
                  type: 'boolean',
                },
                valid: {
                  type: 'boolean',
                },
              },
            },
            command_line: {
              type: 'wildcard',
            },
            elf: {
              properties: {
                architecture: {
                  type: 'keyword',
                },
                byte_order: {
                  type: 'keyword',
                },
                cpu_type: {
                  type: 'keyword',
                },
                creation_date: {
                  type: 'date',
                },
                exports: {
                  type: 'flattened',
                },
                header: {
                  properties: {
                    abi_version: {
                      type: 'keyword',
                    },
                    class: {
                      type: 'keyword',
                    },
                    data: {
                      type: 'keyword',
                    },
                    entrypoint: {
                      type: 'long',
                    },
                    object_version: {
                      type: 'keyword',
                    },
                    os_abi: {
                      type: 'keyword',
                    },
                    type: {
                      type: 'keyword',
                    },
                    version: {
                      type: 'keyword',
                    },
                  },
                },
                imports: {
                  type: 'flattened',
                },
                sections: {
                  type: 'nested',
                  properties: {
                    chi2: {
                      type: 'long',
                    },
                    entropy: {
                      type: 'long',
                    },
                    flags: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                    physical_offset: {
                      type: 'keyword',
                    },
                    physical_size: {
                      type: 'long',
                    },
                    type: {
                      type: 'keyword',
                    },
                    virtual_address: {
                      type: 'long',
                    },
                    virtual_size: {
                      type: 'long',
                    },
                  },
                },
                segments: {
                  type: 'nested',
                  properties: {
                    sections: {
                      type: 'keyword',
                    },
                    type: {
                      type: 'keyword',
                    },
                  },
                },
                shared_libraries: {
                  type: 'keyword',
                },
                telfhash: {
                  type: 'keyword',
                },
              },
            },
            end: {
              type: 'date',
            },
            entity_id: {
              type: 'keyword',
            },
            entry_leader: {
              properties: {
                entity_id: {
                  type: 'keyword',
                },
              },
            },
            executable: {
              type: 'keyword',
            },
            exit_code: {
              type: 'long',
            },
            hash: {
              properties: {
                md5: {
                  type: 'keyword',
                },
                sha1: {
                  type: 'keyword',
                },
                sha256: {
                  type: 'keyword',
                },
                sha512: {
                  type: 'keyword',
                },
                ssdeep: {
                  type: 'keyword',
                },
              },
            },
            name: {
              type: 'keyword',
            },
            parent: {
              properties: {
                args: {
                  type: 'keyword',
                },
                args_count: {
                  type: 'long',
                },
                code_signature: {
                  properties: {
                    digest_algorithm: {
                      type: 'keyword',
                    },
                    exists: {
                      type: 'boolean',
                    },
                    signing_id: {
                      type: 'keyword',
                    },
                    status: {
                      type: 'keyword',
                    },
                    subject_name: {
                      type: 'keyword',
                    },
                    team_id: {
                      type: 'keyword',
                    },
                    timestamp: {
                      type: 'date',
                    },
                    trusted: {
                      type: 'boolean',
                    },
                    valid: {
                      type: 'boolean',
                    },
                  },
                },
                command_line: {
                  type: 'wildcard',
                },
                elf: {
                  properties: {
                    architecture: {
                      type: 'keyword',
                    },
                    byte_order: {
                      type: 'keyword',
                    },
                    cpu_type: {
                      type: 'keyword',
                    },
                    creation_date: {
                      type: 'date',
                    },
                    exports: {
                      type: 'flattened',
                    },
                    header: {
                      properties: {
                        abi_version: {
                          type: 'keyword',
                        },
                        class: {
                          type: 'keyword',
                        },
                        data: {
                          type: 'keyword',
                        },
                        entrypoint: {
                          type: 'long',
                        },
                        object_version: {
                          type: 'keyword',
                        },
                        os_abi: {
                          type: 'keyword',
                        },
                        type: {
                          type: 'keyword',
                        },
                        version: {
                          type: 'keyword',
                        },
                      },
                    },
                    imports: {
                      type: 'flattened',
                    },
                    sections: {
                      type: 'nested',
                      properties: {
                        chi2: {
                          type: 'long',
                        },
                        entropy: {
                          type: 'long',
                        },
                        flags: {
                          type: 'keyword',
                        },
                        name: {
                          type: 'keyword',
                        },
                        physical_offset: {
                          type: 'keyword',
                        },
                        physical_size: {
                          type: 'long',
                        },
                        type: {
                          type: 'keyword',
                        },
                        virtual_address: {
                          type: 'long',
                        },
                        virtual_size: {
                          type: 'long',
                        },
                      },
                    },
                    segments: {
                      type: 'nested',
                      properties: {
                        sections: {
                          type: 'keyword',
                        },
                        type: {
                          type: 'keyword',
                        },
                      },
                    },
                    shared_libraries: {
                      type: 'keyword',
                    },
                    telfhash: {
                      type: 'keyword',
                    },
                  },
                },
                end: {
                  type: 'date',
                },
                entity_id: {
                  type: 'keyword',
                },
                executable: {
                  type: 'keyword',
                },
                exit_code: {
                  type: 'long',
                },
                hash: {
                  properties: {
                    md5: {
                      type: 'keyword',
                    },
                    sha1: {
                      type: 'keyword',
                    },
                    sha256: {
                      type: 'keyword',
                    },
                    sha512: {
                      type: 'keyword',
                    },
                    ssdeep: {
                      type: 'keyword',
                    },
                  },
                },
                name: {
                  type: 'keyword',
                },
                pe: {
                  properties: {
                    architecture: {
                      type: 'keyword',
                    },
                    company: {
                      type: 'keyword',
                    },
                    description: {
                      type: 'keyword',
                    },
                    file_version: {
                      type: 'keyword',
                    },
                    imphash: {
                      type: 'keyword',
                    },
                    original_file_name: {
                      type: 'keyword',
                    },
                    product: {
                      type: 'keyword',
                    },
                  },
                },
                pgid: {
                  type: 'long',
                },
                pid: {
                  type: 'long',
                },
                start: {
                  type: 'date',
                },
                thread: {
                  properties: {
                    id: {
                      type: 'long',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                title: {
                  type: 'keyword',
                },
                uptime: {
                  type: 'long',
                },
                working_directory: {
                  type: 'keyword',
                },
              },
            },
            pe: {
              properties: {
                architecture: {
                  type: 'keyword',
                },
                company: {
                  type: 'keyword',
                },
                description: {
                  type: 'keyword',
                },
                file_version: {
                  type: 'keyword',
                },
                imphash: {
                  type: 'keyword',
                },
                original_file_name: {
                  type: 'keyword',
                },
                product: {
                  type: 'keyword',
                },
              },
            },
            pgid: {
              type: 'long',
            },
            pid: {
              type: 'long',
            },
            session_leader: {
              properties: {
                entity_id: {
                  type: 'keyword',
                },
              },
            },
            start: {
              type: 'date',
            },
            thread: {
              properties: {
                id: {
                  type: 'long',
                },
                name: {
                  type: 'keyword',
                },
              },
            },
            title: {
              type: 'keyword',
            },
            uptime: {
              type: 'long',
            },
            working_directory: {
              type: 'keyword',
            },
          },
        },
        registry: {
          properties: {
            data: {
              properties: {
                bytes: {
                  type: 'keyword',
                },
                strings: {
                  type: 'wildcard',
                },
                type: {
                  type: 'keyword',
                },
              },
            },
            hive: {
              type: 'keyword',
            },
            key: {
              type: 'keyword',
            },
            path: {
              type: 'keyword',
            },
            value: {
              type: 'keyword',
            },
          },
        },
        related: {
          properties: {
            hash: {
              type: 'keyword',
            },
            hosts: {
              type: 'keyword',
            },
            ip: {
              type: 'ip',
            },
            user: {
              type: 'keyword',
            },
          },
        },
        rule: {
          properties: {
            author: {
              type: 'keyword',
            },
            category: {
              type: 'keyword',
            },
            description: {
              type: 'keyword',
            },
            id: {
              type: 'keyword',
            },
            license: {
              type: 'keyword',
            },
            name: {
              type: 'keyword',
            },
            reference: {
              type: 'keyword',
            },
            ruleset: {
              type: 'keyword',
            },
            uuid: {
              type: 'keyword',
            },
            version: {
              type: 'keyword',
            },
          },
        },
        server: {
          properties: {
            address: {
              type: 'keyword',
            },
            as: {
              properties: {
                number: {
                  type: 'long',
                },
                organization: {
                  properties: {
                    name: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
            bytes: {
              type: 'long',
            },
            domain: {
              type: 'keyword',
            },
            geo: {
              properties: {
                city_name: {
                  type: 'keyword',
                },
                continent_code: {
                  type: 'keyword',
                },
                continent_name: {
                  type: 'keyword',
                },
                country_iso_code: {
                  type: 'keyword',
                },
                country_name: {
                  type: 'keyword',
                },
                location: {
                  type: 'geo_point',
                },
                name: {
                  type: 'keyword',
                },
                postal_code: {
                  type: 'keyword',
                },
                region_iso_code: {
                  type: 'keyword',
                },
                region_name: {
                  type: 'keyword',
                },
                timezone: {
                  type: 'keyword',
                },
              },
            },
            ip: {
              type: 'ip',
            },
            mac: {
              type: 'keyword',
            },
            nat: {
              properties: {
                ip: {
                  type: 'ip',
                },
                port: {
                  type: 'long',
                },
              },
            },
            packets: {
              type: 'long',
            },
            port: {
              type: 'long',
            },
            registered_domain: {
              type: 'keyword',
            },
            subdomain: {
              type: 'keyword',
            },
            top_level_domain: {
              type: 'keyword',
            },
            user: {
              properties: {
                domain: {
                  type: 'keyword',
                },
                email: {
                  type: 'keyword',
                },
                full_name: {
                  type: 'keyword',
                },
                group: {
                  properties: {
                    domain: {
                      type: 'keyword',
                    },
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                hash: {
                  type: 'keyword',
                },
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                roles: {
                  type: 'keyword',
                },
              },
            },
          },
        },
        service: {
          properties: {
            address: {
              type: 'keyword',
            },
            environment: {
              type: 'keyword',
            },
            ephemeral_id: {
              type: 'keyword',
            },
            id: {
              type: 'keyword',
            },
            name: {
              type: 'keyword',
            },
            node: {
              properties: {
                name: {
                  type: 'keyword',
                },
              },
            },
            origin: {
              properties: {
                address: {
                  type: 'keyword',
                },
                environment: {
                  type: 'keyword',
                },
                ephemeral_id: {
                  type: 'keyword',
                },
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                node: {
                  properties: {
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                state: {
                  type: 'keyword',
                },
                type: {
                  type: 'keyword',
                },
                version: {
                  type: 'keyword',
                },
              },
            },
            state: {
              type: 'keyword',
            },
            target: {
              properties: {
                address: {
                  type: 'keyword',
                },
                environment: {
                  type: 'keyword',
                },
                ephemeral_id: {
                  type: 'keyword',
                },
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                node: {
                  properties: {
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                state: {
                  type: 'keyword',
                },
                type: {
                  type: 'keyword',
                },
                version: {
                  type: 'keyword',
                },
              },
            },
            type: {
              type: 'keyword',
            },
            version: {
              type: 'keyword',
            },
          },
        },
        signal: {
          properties: {
            ancestors: {
              properties: {
                depth: {
                  type: 'alias',
                  path: 'kibana.alert.ancestors.depth',
                },
                id: {
                  type: 'alias',
                  path: 'kibana.alert.ancestors.id',
                },
                index: {
                  type: 'alias',
                  path: 'kibana.alert.ancestors.index',
                },
                type: {
                  type: 'alias',
                  path: 'kibana.alert.ancestors.type',
                },
              },
            },
            depth: {
              type: 'alias',
              path: 'kibana.alert.depth',
            },
            group: {
              properties: {
                id: {
                  type: 'alias',
                  path: 'kibana.alert.group.id',
                },
                index: {
                  type: 'alias',
                  path: 'kibana.alert.group.index',
                },
              },
            },
            original_event: {
              properties: {
                action: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.action',
                },
                category: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.category',
                },
                code: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.code',
                },
                created: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.created',
                },
                dataset: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.dataset',
                },
                duration: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.duration',
                },
                end: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.end',
                },
                hash: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.hash',
                },
                id: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.id',
                },
                kind: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.kind',
                },
                module: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.module',
                },
                outcome: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.outcome',
                },
                provider: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.provider',
                },
                reason: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.reason',
                },
                risk_score: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.risk_score',
                },
                risk_score_norm: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.risk_score_norm',
                },
                sequence: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.sequence',
                },
                severity: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.severity',
                },
                start: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.start',
                },
                timezone: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.timezone',
                },
                type: {
                  type: 'alias',
                  path: 'kibana.alert.original_event.type',
                },
              },
            },
            original_time: {
              type: 'alias',
              path: 'kibana.alert.original_time',
            },
            reason: {
              type: 'alias',
              path: 'kibana.alert.reason',
            },
            rule: {
              properties: {
                author: {
                  type: 'alias',
                  path: 'kibana.alert.rule.author',
                },
                building_block_type: {
                  type: 'alias',
                  path: 'kibana.alert.building_block_type',
                },
                created_at: {
                  type: 'alias',
                  path: 'kibana.alert.rule.created_at',
                },
                created_by: {
                  type: 'alias',
                  path: 'kibana.alert.rule.created_by',
                },
                description: {
                  type: 'alias',
                  path: 'kibana.alert.rule.description',
                },
                enabled: {
                  type: 'alias',
                  path: 'kibana.alert.rule.enabled',
                },
                false_positives: {
                  type: 'alias',
                  path: 'kibana.alert.rule.false_positives',
                },
                from: {
                  type: 'alias',
                  path: 'kibana.alert.rule.from',
                },
                id: {
                  type: 'alias',
                  path: 'kibana.alert.rule.uuid',
                },
                immutable: {
                  type: 'alias',
                  path: 'kibana.alert.rule.immutable',
                },
                interval: {
                  type: 'alias',
                  path: 'kibana.alert.rule.interval',
                },
                license: {
                  type: 'alias',
                  path: 'kibana.alert.rule.license',
                },
                max_signals: {
                  type: 'alias',
                  path: 'kibana.alert.rule.max_signals',
                },
                name: {
                  type: 'alias',
                  path: 'kibana.alert.rule.name',
                },
                note: {
                  type: 'alias',
                  path: 'kibana.alert.rule.note',
                },
                references: {
                  type: 'alias',
                  path: 'kibana.alert.rule.references',
                },
                risk_score: {
                  type: 'alias',
                  path: 'kibana.alert.risk_score',
                },
                rule_id: {
                  type: 'alias',
                  path: 'kibana.alert.rule.rule_id',
                },
                rule_name_override: {
                  type: 'alias',
                  path: 'kibana.alert.rule.rule_name_override',
                },
                severity: {
                  type: 'alias',
                  path: 'kibana.alert.severity',
                },
                tags: {
                  type: 'alias',
                  path: 'kibana.alert.rule.tags',
                },
                threat: {
                  properties: {
                    framework: {
                      type: 'alias',
                      path: 'kibana.alert.rule.threat.framework',
                    },
                    tactic: {
                      properties: {
                        id: {
                          type: 'alias',
                          path: 'kibana.alert.rule.threat.tactic.id',
                        },
                        name: {
                          type: 'alias',
                          path: 'kibana.alert.rule.threat.tactic.name',
                        },
                        reference: {
                          type: 'alias',
                          path: 'kibana.alert.rule.threat.tactic.reference',
                        },
                      },
                    },
                    technique: {
                      properties: {
                        id: {
                          type: 'alias',
                          path: 'kibana.alert.rule.threat.technique.id',
                        },
                        name: {
                          type: 'alias',
                          path: 'kibana.alert.rule.threat.technique.name',
                        },
                        reference: {
                          type: 'alias',
                          path: 'kibana.alert.rule.threat.technique.reference',
                        },
                        subtechnique: {
                          properties: {
                            id: {
                              type: 'alias',
                              path: 'kibana.alert.rule.threat.technique.subtechnique.id',
                            },
                            name: {
                              type: 'alias',
                              path: 'kibana.alert.rule.threat.technique.subtechnique.name',
                            },
                            reference: {
                              type: 'alias',
                              path: 'kibana.alert.rule.threat.technique.subtechnique.reference',
                            },
                          },
                        },
                      },
                    },
                  },
                },
                timeline_id: {
                  type: 'alias',
                  path: 'kibana.alert.rule.timeline_id',
                },
                timeline_title: {
                  type: 'alias',
                  path: 'kibana.alert.rule.timeline_title',
                },
                timestamp_override: {
                  type: 'alias',
                  path: 'kibana.alert.rule.timestamp_override',
                },
                to: {
                  type: 'alias',
                  path: 'kibana.alert.rule.to',
                },
                type: {
                  type: 'alias',
                  path: 'kibana.alert.rule.type',
                },
                updated_at: {
                  type: 'alias',
                  path: 'kibana.alert.rule.updated_at',
                },
                updated_by: {
                  type: 'alias',
                  path: 'kibana.alert.rule.updated_by',
                },
                version: {
                  type: 'alias',
                  path: 'kibana.alert.rule.version',
                },
              },
            },
            status: {
              type: 'alias',
              path: 'kibana.alert.workflow_status',
            },
            threshold_result: {
              properties: {
                cardinality: {
                  properties: {
                    field: {
                      type: 'alias',
                      path: 'kibana.alert.threshold_result.cardinality.field',
                    },
                    value: {
                      type: 'alias',
                      path: 'kibana.alert.threshold_result.cardinality.value',
                    },
                  },
                },
                count: {
                  type: 'alias',
                  path: 'kibana.alert.threshold_result.count',
                },
                from: {
                  type: 'alias',
                  path: 'kibana.alert.threshold_result.from',
                },
                terms: {
                  properties: {
                    field: {
                      type: 'alias',
                      path: 'kibana.alert.threshold_result.terms.field',
                    },
                    value: {
                      type: 'alias',
                      path: 'kibana.alert.threshold_result.terms.value',
                    },
                  },
                },
              },
            },
          },
        },
        source: {
          properties: {
            address: {
              type: 'keyword',
            },
            as: {
              properties: {
                number: {
                  type: 'long',
                },
                organization: {
                  properties: {
                    name: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
            bytes: {
              type: 'long',
            },
            domain: {
              type: 'keyword',
            },
            geo: {
              properties: {
                city_name: {
                  type: 'keyword',
                },
                continent_code: {
                  type: 'keyword',
                },
                continent_name: {
                  type: 'keyword',
                },
                country_iso_code: {
                  type: 'keyword',
                },
                country_name: {
                  type: 'keyword',
                },
                location: {
                  type: 'geo_point',
                },
                name: {
                  type: 'keyword',
                },
                postal_code: {
                  type: 'keyword',
                },
                region_iso_code: {
                  type: 'keyword',
                },
                region_name: {
                  type: 'keyword',
                },
                timezone: {
                  type: 'keyword',
                },
              },
            },
            ip: {
              type: 'ip',
            },
            mac: {
              type: 'keyword',
            },
            nat: {
              properties: {
                ip: {
                  type: 'ip',
                },
                port: {
                  type: 'long',
                },
              },
            },
            packets: {
              type: 'long',
            },
            port: {
              type: 'long',
            },
            registered_domain: {
              type: 'keyword',
            },
            subdomain: {
              type: 'keyword',
            },
            top_level_domain: {
              type: 'keyword',
            },
            user: {
              properties: {
                domain: {
                  type: 'keyword',
                },
                email: {
                  type: 'keyword',
                },
                full_name: {
                  type: 'keyword',
                },
                group: {
                  properties: {
                    domain: {
                      type: 'keyword',
                    },
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                hash: {
                  type: 'keyword',
                },
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                roles: {
                  type: 'keyword',
                },
              },
            },
          },
        },
        span: {
          properties: {
            id: {
              type: 'keyword',
            },
          },
        },
        tags: {
          type: 'keyword',
        },
        threat: {
          properties: {
            enrichments: {
              type: 'nested',
              properties: {
                indicator: {
                  properties: {
                    as: {
                      properties: {
                        number: {
                          type: 'long',
                        },
                        organization: {
                          properties: {
                            name: {
                              type: 'keyword',
                            },
                          },
                        },
                      },
                    },
                    confidence: {
                      type: 'keyword',
                    },
                    description: {
                      type: 'keyword',
                    },
                    email: {
                      properties: {
                        address: {
                          type: 'keyword',
                        },
                      },
                    },
                    file: {
                      properties: {
                        accessed: {
                          type: 'date',
                        },
                        attributes: {
                          type: 'keyword',
                        },
                        code_signature: {
                          properties: {
                            digest_algorithm: {
                              type: 'keyword',
                            },
                            exists: {
                              type: 'boolean',
                            },
                            signing_id: {
                              type: 'keyword',
                            },
                            status: {
                              type: 'keyword',
                            },
                            subject_name: {
                              type: 'keyword',
                            },
                            team_id: {
                              type: 'keyword',
                            },
                            timestamp: {
                              type: 'date',
                            },
                            trusted: {
                              type: 'boolean',
                            },
                            valid: {
                              type: 'boolean',
                            },
                          },
                        },
                        created: {
                          type: 'date',
                        },
                        ctime: {
                          type: 'date',
                        },
                        device: {
                          type: 'keyword',
                        },
                        directory: {
                          type: 'keyword',
                        },
                        drive_letter: {
                          type: 'keyword',
                        },
                        elf: {
                          properties: {
                            architecture: {
                              type: 'keyword',
                            },
                            byte_order: {
                              type: 'keyword',
                            },
                            cpu_type: {
                              type: 'keyword',
                            },
                            creation_date: {
                              type: 'date',
                            },
                            exports: {
                              type: 'flattened',
                            },
                            header: {
                              properties: {
                                abi_version: {
                                  type: 'keyword',
                                },
                                class: {
                                  type: 'keyword',
                                },
                                data: {
                                  type: 'keyword',
                                },
                                entrypoint: {
                                  type: 'long',
                                },
                                object_version: {
                                  type: 'keyword',
                                },
                                os_abi: {
                                  type: 'keyword',
                                },
                                type: {
                                  type: 'keyword',
                                },
                                version: {
                                  type: 'keyword',
                                },
                              },
                            },
                            imports: {
                              type: 'flattened',
                            },
                            sections: {
                              type: 'nested',
                              properties: {
                                chi2: {
                                  type: 'long',
                                },
                                entropy: {
                                  type: 'long',
                                },
                                flags: {
                                  type: 'keyword',
                                },
                                name: {
                                  type: 'keyword',
                                },
                                physical_offset: {
                                  type: 'keyword',
                                },
                                physical_size: {
                                  type: 'long',
                                },
                                type: {
                                  type: 'keyword',
                                },
                                virtual_address: {
                                  type: 'long',
                                },
                                virtual_size: {
                                  type: 'long',
                                },
                              },
                            },
                            segments: {
                              type: 'nested',
                              properties: {
                                sections: {
                                  type: 'keyword',
                                },
                                type: {
                                  type: 'keyword',
                                },
                              },
                            },
                            shared_libraries: {
                              type: 'keyword',
                            },
                            telfhash: {
                              type: 'keyword',
                            },
                          },
                        },
                        extension: {
                          type: 'keyword',
                        },
                        fork_name: {
                          type: 'keyword',
                        },
                        gid: {
                          type: 'keyword',
                        },
                        group: {
                          type: 'keyword',
                        },
                        hash: {
                          properties: {
                            md5: {
                              type: 'keyword',
                            },
                            sha1: {
                              type: 'keyword',
                            },
                            sha256: {
                              type: 'keyword',
                            },
                            sha512: {
                              type: 'keyword',
                            },
                            ssdeep: {
                              type: 'keyword',
                            },
                          },
                        },
                        inode: {
                          type: 'keyword',
                        },
                        mime_type: {
                          type: 'keyword',
                        },
                        mode: {
                          type: 'keyword',
                        },
                        mtime: {
                          type: 'date',
                        },
                        name: {
                          type: 'keyword',
                        },
                        owner: {
                          type: 'keyword',
                        },
                        path: {
                          type: 'keyword',
                        },
                        pe: {
                          properties: {
                            architecture: {
                              type: 'keyword',
                            },
                            company: {
                              type: 'keyword',
                            },
                            description: {
                              type: 'keyword',
                            },
                            file_version: {
                              type: 'keyword',
                            },
                            imphash: {
                              type: 'keyword',
                            },
                            original_file_name: {
                              type: 'keyword',
                            },
                            product: {
                              type: 'keyword',
                            },
                          },
                        },
                        size: {
                          type: 'long',
                        },
                        target_path: {
                          type: 'keyword',
                        },
                        type: {
                          type: 'keyword',
                        },
                        uid: {
                          type: 'keyword',
                        },
                        x509: {
                          properties: {
                            alternative_names: {
                              type: 'keyword',
                            },
                            issuer: {
                              properties: {
                                common_name: {
                                  type: 'keyword',
                                },
                                country: {
                                  type: 'keyword',
                                },
                                distinguished_name: {
                                  type: 'keyword',
                                },
                                locality: {
                                  type: 'keyword',
                                },
                                organization: {
                                  type: 'keyword',
                                },
                                organizational_unit: {
                                  type: 'keyword',
                                },
                                state_or_province: {
                                  type: 'keyword',
                                },
                              },
                            },
                            not_after: {
                              type: 'date',
                            },
                            not_before: {
                              type: 'date',
                            },
                            public_key_algorithm: {
                              type: 'keyword',
                            },
                            public_key_curve: {
                              type: 'keyword',
                            },
                            public_key_exponent: {
                              type: 'long',
                            },
                            public_key_size: {
                              type: 'long',
                            },
                            serial_number: {
                              type: 'keyword',
                            },
                            signature_algorithm: {
                              type: 'keyword',
                            },
                            subject: {
                              properties: {
                                common_name: {
                                  type: 'keyword',
                                },
                                country: {
                                  type: 'keyword',
                                },
                                distinguished_name: {
                                  type: 'keyword',
                                },
                                locality: {
                                  type: 'keyword',
                                },
                                organization: {
                                  type: 'keyword',
                                },
                                organizational_unit: {
                                  type: 'keyword',
                                },
                                state_or_province: {
                                  type: 'keyword',
                                },
                              },
                            },
                            version_number: {
                              type: 'keyword',
                            },
                          },
                        },
                      },
                    },
                    first_seen: {
                      type: 'date',
                    },
                    geo: {
                      properties: {
                        city_name: {
                          type: 'keyword',
                        },
                        continent_code: {
                          type: 'keyword',
                        },
                        continent_name: {
                          type: 'keyword',
                        },
                        country_iso_code: {
                          type: 'keyword',
                        },
                        country_name: {
                          type: 'keyword',
                        },
                        location: {
                          type: 'geo_point',
                        },
                        name: {
                          type: 'keyword',
                        },
                        postal_code: {
                          type: 'keyword',
                        },
                        region_iso_code: {
                          type: 'keyword',
                        },
                        region_name: {
                          type: 'keyword',
                        },
                        timezone: {
                          type: 'keyword',
                        },
                      },
                    },
                    ip: {
                      type: 'ip',
                    },
                    last_seen: {
                      type: 'date',
                    },
                    marking: {
                      properties: {
                        tlp: {
                          type: 'keyword',
                        },
                      },
                    },
                    modified_at: {
                      type: 'date',
                    },
                    port: {
                      type: 'long',
                    },
                    provider: {
                      type: 'keyword',
                    },
                    reference: {
                      type: 'keyword',
                    },
                    registry: {
                      properties: {
                        data: {
                          properties: {
                            bytes: {
                              type: 'keyword',
                            },
                            strings: {
                              type: 'wildcard',
                            },
                            type: {
                              type: 'keyword',
                            },
                          },
                        },
                        hive: {
                          type: 'keyword',
                        },
                        key: {
                          type: 'keyword',
                        },
                        path: {
                          type: 'keyword',
                        },
                        value: {
                          type: 'keyword',
                        },
                      },
                    },
                    scanner_stats: {
                      type: 'long',
                    },
                    sightings: {
                      type: 'long',
                    },
                    type: {
                      type: 'keyword',
                    },
                    url: {
                      properties: {
                        domain: {
                          type: 'keyword',
                        },
                        extension: {
                          type: 'keyword',
                        },
                        fragment: {
                          type: 'keyword',
                        },
                        full: {
                          type: 'wildcard',
                        },
                        original: {
                          type: 'wildcard',
                        },
                        password: {
                          type: 'keyword',
                        },
                        path: {
                          type: 'wildcard',
                        },
                        port: {
                          type: 'long',
                        },
                        query: {
                          type: 'keyword',
                        },
                        registered_domain: {
                          type: 'keyword',
                        },
                        scheme: {
                          type: 'keyword',
                        },
                        subdomain: {
                          type: 'keyword',
                        },
                        top_level_domain: {
                          type: 'keyword',
                        },
                        username: {
                          type: 'keyword',
                        },
                      },
                    },
                    x509: {
                      properties: {
                        alternative_names: {
                          type: 'keyword',
                        },
                        issuer: {
                          properties: {
                            common_name: {
                              type: 'keyword',
                            },
                            country: {
                              type: 'keyword',
                            },
                            distinguished_name: {
                              type: 'keyword',
                            },
                            locality: {
                              type: 'keyword',
                            },
                            organization: {
                              type: 'keyword',
                            },
                            organizational_unit: {
                              type: 'keyword',
                            },
                            state_or_province: {
                              type: 'keyword',
                            },
                          },
                        },
                        not_after: {
                          type: 'date',
                        },
                        not_before: {
                          type: 'date',
                        },
                        public_key_algorithm: {
                          type: 'keyword',
                        },
                        public_key_curve: {
                          type: 'keyword',
                        },
                        public_key_exponent: {
                          type: 'long',
                        },
                        public_key_size: {
                          type: 'long',
                        },
                        serial_number: {
                          type: 'keyword',
                        },
                        signature_algorithm: {
                          type: 'keyword',
                        },
                        subject: {
                          properties: {
                            common_name: {
                              type: 'keyword',
                            },
                            country: {
                              type: 'keyword',
                            },
                            distinguished_name: {
                              type: 'keyword',
                            },
                            locality: {
                              type: 'keyword',
                            },
                            organization: {
                              type: 'keyword',
                            },
                            organizational_unit: {
                              type: 'keyword',
                            },
                            state_or_province: {
                              type: 'keyword',
                            },
                          },
                        },
                        version_number: {
                          type: 'keyword',
                        },
                      },
                    },
                  },
                },
                matched: {
                  properties: {
                    atomic: {
                      type: 'keyword',
                    },
                    field: {
                      type: 'keyword',
                    },
                    id: {
                      type: 'keyword',
                    },
                    index: {
                      type: 'keyword',
                    },
                    type: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
            framework: {
              type: 'keyword',
            },
            group: {
              properties: {
                alias: {
                  type: 'keyword',
                },
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                reference: {
                  type: 'keyword',
                },
              },
            },
            indicator: {
              properties: {
                as: {
                  properties: {
                    number: {
                      type: 'long',
                    },
                    organization: {
                      properties: {
                        name: {
                          type: 'keyword',
                        },
                      },
                    },
                  },
                },
                confidence: {
                  type: 'keyword',
                },
                description: {
                  type: 'keyword',
                },
                email: {
                  properties: {
                    address: {
                      type: 'keyword',
                    },
                  },
                },
                file: {
                  properties: {
                    accessed: {
                      type: 'date',
                    },
                    attributes: {
                      type: 'keyword',
                    },
                    code_signature: {
                      properties: {
                        digest_algorithm: {
                          type: 'keyword',
                        },
                        exists: {
                          type: 'boolean',
                        },
                        signing_id: {
                          type: 'keyword',
                        },
                        status: {
                          type: 'keyword',
                        },
                        subject_name: {
                          type: 'keyword',
                        },
                        team_id: {
                          type: 'keyword',
                        },
                        timestamp: {
                          type: 'date',
                        },
                        trusted: {
                          type: 'boolean',
                        },
                        valid: {
                          type: 'boolean',
                        },
                      },
                    },
                    created: {
                      type: 'date',
                    },
                    ctime: {
                      type: 'date',
                    },
                    device: {
                      type: 'keyword',
                    },
                    directory: {
                      type: 'keyword',
                    },
                    drive_letter: {
                      type: 'keyword',
                    },
                    elf: {
                      properties: {
                        architecture: {
                          type: 'keyword',
                        },
                        byte_order: {
                          type: 'keyword',
                        },
                        cpu_type: {
                          type: 'keyword',
                        },
                        creation_date: {
                          type: 'date',
                        },
                        exports: {
                          type: 'flattened',
                        },
                        header: {
                          properties: {
                            abi_version: {
                              type: 'keyword',
                            },
                            class: {
                              type: 'keyword',
                            },
                            data: {
                              type: 'keyword',
                            },
                            entrypoint: {
                              type: 'long',
                            },
                            object_version: {
                              type: 'keyword',
                            },
                            os_abi: {
                              type: 'keyword',
                            },
                            type: {
                              type: 'keyword',
                            },
                            version: {
                              type: 'keyword',
                            },
                          },
                        },
                        imports: {
                          type: 'flattened',
                        },
                        sections: {
                          type: 'nested',
                          properties: {
                            chi2: {
                              type: 'long',
                            },
                            entropy: {
                              type: 'long',
                            },
                            flags: {
                              type: 'keyword',
                            },
                            name: {
                              type: 'keyword',
                            },
                            physical_offset: {
                              type: 'keyword',
                            },
                            physical_size: {
                              type: 'long',
                            },
                            type: {
                              type: 'keyword',
                            },
                            virtual_address: {
                              type: 'long',
                            },
                            virtual_size: {
                              type: 'long',
                            },
                          },
                        },
                        segments: {
                          type: 'nested',
                          properties: {
                            sections: {
                              type: 'keyword',
                            },
                            type: {
                              type: 'keyword',
                            },
                          },
                        },
                        shared_libraries: {
                          type: 'keyword',
                        },
                        telfhash: {
                          type: 'keyword',
                        },
                      },
                    },
                    extension: {
                      type: 'keyword',
                    },
                    fork_name: {
                      type: 'keyword',
                    },
                    gid: {
                      type: 'keyword',
                    },
                    group: {
                      type: 'keyword',
                    },
                    hash: {
                      properties: {
                        md5: {
                          type: 'keyword',
                        },
                        sha1: {
                          type: 'keyword',
                        },
                        sha256: {
                          type: 'keyword',
                        },
                        sha512: {
                          type: 'keyword',
                        },
                        ssdeep: {
                          type: 'keyword',
                        },
                      },
                    },
                    inode: {
                      type: 'keyword',
                    },
                    mime_type: {
                      type: 'keyword',
                    },
                    mode: {
                      type: 'keyword',
                    },
                    mtime: {
                      type: 'date',
                    },
                    name: {
                      type: 'keyword',
                    },
                    owner: {
                      type: 'keyword',
                    },
                    path: {
                      type: 'keyword',
                    },
                    pe: {
                      properties: {
                        architecture: {
                          type: 'keyword',
                        },
                        company: {
                          type: 'keyword',
                        },
                        description: {
                          type: 'keyword',
                        },
                        file_version: {
                          type: 'keyword',
                        },
                        imphash: {
                          type: 'keyword',
                        },
                        original_file_name: {
                          type: 'keyword',
                        },
                        product: {
                          type: 'keyword',
                        },
                      },
                    },
                    size: {
                      type: 'long',
                    },
                    target_path: {
                      type: 'keyword',
                    },
                    type: {
                      type: 'keyword',
                    },
                    uid: {
                      type: 'keyword',
                    },
                    x509: {
                      properties: {
                        alternative_names: {
                          type: 'keyword',
                        },
                        issuer: {
                          properties: {
                            common_name: {
                              type: 'keyword',
                            },
                            country: {
                              type: 'keyword',
                            },
                            distinguished_name: {
                              type: 'keyword',
                            },
                            locality: {
                              type: 'keyword',
                            },
                            organization: {
                              type: 'keyword',
                            },
                            organizational_unit: {
                              type: 'keyword',
                            },
                            state_or_province: {
                              type: 'keyword',
                            },
                          },
                        },
                        not_after: {
                          type: 'date',
                        },
                        not_before: {
                          type: 'date',
                        },
                        public_key_algorithm: {
                          type: 'keyword',
                        },
                        public_key_curve: {
                          type: 'keyword',
                        },
                        public_key_exponent: {
                          type: 'long',
                        },
                        public_key_size: {
                          type: 'long',
                        },
                        serial_number: {
                          type: 'keyword',
                        },
                        signature_algorithm: {
                          type: 'keyword',
                        },
                        subject: {
                          properties: {
                            common_name: {
                              type: 'keyword',
                            },
                            country: {
                              type: 'keyword',
                            },
                            distinguished_name: {
                              type: 'keyword',
                            },
                            locality: {
                              type: 'keyword',
                            },
                            organization: {
                              type: 'keyword',
                            },
                            organizational_unit: {
                              type: 'keyword',
                            },
                            state_or_province: {
                              type: 'keyword',
                            },
                          },
                        },
                        version_number: {
                          type: 'keyword',
                        },
                      },
                    },
                  },
                },
                first_seen: {
                  type: 'date',
                },
                geo: {
                  properties: {
                    city_name: {
                      type: 'keyword',
                    },
                    continent_code: {
                      type: 'keyword',
                    },
                    continent_name: {
                      type: 'keyword',
                    },
                    country_iso_code: {
                      type: 'keyword',
                    },
                    country_name: {
                      type: 'keyword',
                    },
                    location: {
                      type: 'geo_point',
                    },
                    name: {
                      type: 'keyword',
                    },
                    postal_code: {
                      type: 'keyword',
                    },
                    region_iso_code: {
                      type: 'keyword',
                    },
                    region_name: {
                      type: 'keyword',
                    },
                    timezone: {
                      type: 'keyword',
                    },
                  },
                },
                ip: {
                  type: 'ip',
                },
                last_seen: {
                  type: 'date',
                },
                marking: {
                  properties: {
                    tlp: {
                      type: 'keyword',
                    },
                  },
                },
                modified_at: {
                  type: 'date',
                },
                port: {
                  type: 'long',
                },
                provider: {
                  type: 'keyword',
                },
                reference: {
                  type: 'keyword',
                },
                registry: {
                  properties: {
                    data: {
                      properties: {
                        bytes: {
                          type: 'keyword',
                        },
                        strings: {
                          type: 'wildcard',
                        },
                        type: {
                          type: 'keyword',
                        },
                      },
                    },
                    hive: {
                      type: 'keyword',
                    },
                    key: {
                      type: 'keyword',
                    },
                    path: {
                      type: 'keyword',
                    },
                    value: {
                      type: 'keyword',
                    },
                  },
                },
                scanner_stats: {
                  type: 'long',
                },
                sightings: {
                  type: 'long',
                },
                type: {
                  type: 'keyword',
                },
                url: {
                  properties: {
                    domain: {
                      type: 'keyword',
                    },
                    extension: {
                      type: 'keyword',
                    },
                    fragment: {
                      type: 'keyword',
                    },
                    full: {
                      type: 'wildcard',
                    },
                    original: {
                      type: 'wildcard',
                    },
                    password: {
                      type: 'keyword',
                    },
                    path: {
                      type: 'wildcard',
                    },
                    port: {
                      type: 'long',
                    },
                    query: {
                      type: 'keyword',
                    },
                    registered_domain: {
                      type: 'keyword',
                    },
                    scheme: {
                      type: 'keyword',
                    },
                    subdomain: {
                      type: 'keyword',
                    },
                    top_level_domain: {
                      type: 'keyword',
                    },
                    username: {
                      type: 'keyword',
                    },
                  },
                },
                x509: {
                  properties: {
                    alternative_names: {
                      type: 'keyword',
                    },
                    issuer: {
                      properties: {
                        common_name: {
                          type: 'keyword',
                        },
                        country: {
                          type: 'keyword',
                        },
                        distinguished_name: {
                          type: 'keyword',
                        },
                        locality: {
                          type: 'keyword',
                        },
                        organization: {
                          type: 'keyword',
                        },
                        organizational_unit: {
                          type: 'keyword',
                        },
                        state_or_province: {
                          type: 'keyword',
                        },
                      },
                    },
                    not_after: {
                      type: 'date',
                    },
                    not_before: {
                      type: 'date',
                    },
                    public_key_algorithm: {
                      type: 'keyword',
                    },
                    public_key_curve: {
                      type: 'keyword',
                    },
                    public_key_exponent: {
                      type: 'long',
                    },
                    public_key_size: {
                      type: 'long',
                    },
                    serial_number: {
                      type: 'keyword',
                    },
                    signature_algorithm: {
                      type: 'keyword',
                    },
                    subject: {
                      properties: {
                        common_name: {
                          type: 'keyword',
                        },
                        country: {
                          type: 'keyword',
                        },
                        distinguished_name: {
                          type: 'keyword',
                        },
                        locality: {
                          type: 'keyword',
                        },
                        organization: {
                          type: 'keyword',
                        },
                        organizational_unit: {
                          type: 'keyword',
                        },
                        state_or_province: {
                          type: 'keyword',
                        },
                      },
                    },
                    version_number: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
            software: {
              properties: {
                alias: {
                  type: 'keyword',
                },
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                platforms: {
                  type: 'keyword',
                },
                reference: {
                  type: 'keyword',
                },
                type: {
                  type: 'keyword',
                },
              },
            },
            tactic: {
              properties: {
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                reference: {
                  type: 'keyword',
                },
              },
            },
            technique: {
              properties: {
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                reference: {
                  type: 'keyword',
                },
                subtechnique: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                    reference: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
          },
        },
        tls: {
          properties: {
            cipher: {
              type: 'keyword',
            },
            client: {
              properties: {
                certificate: {
                  type: 'keyword',
                },
                certificate_chain: {
                  type: 'keyword',
                },
                hash: {
                  properties: {
                    md5: {
                      type: 'keyword',
                    },
                    sha1: {
                      type: 'keyword',
                    },
                    sha256: {
                      type: 'keyword',
                    },
                  },
                },
                issuer: {
                  type: 'keyword',
                },
                ja3: {
                  type: 'keyword',
                },
                not_after: {
                  type: 'date',
                },
                not_before: {
                  type: 'date',
                },
                server_name: {
                  type: 'keyword',
                },
                subject: {
                  type: 'keyword',
                },
                supported_ciphers: {
                  type: 'keyword',
                },
                x509: {
                  properties: {
                    alternative_names: {
                      type: 'keyword',
                    },
                    issuer: {
                      properties: {
                        common_name: {
                          type: 'keyword',
                        },
                        country: {
                          type: 'keyword',
                        },
                        distinguished_name: {
                          type: 'keyword',
                        },
                        locality: {
                          type: 'keyword',
                        },
                        organization: {
                          type: 'keyword',
                        },
                        organizational_unit: {
                          type: 'keyword',
                        },
                        state_or_province: {
                          type: 'keyword',
                        },
                      },
                    },
                    not_after: {
                      type: 'date',
                    },
                    not_before: {
                      type: 'date',
                    },
                    public_key_algorithm: {
                      type: 'keyword',
                    },
                    public_key_curve: {
                      type: 'keyword',
                    },
                    public_key_exponent: {
                      type: 'long',
                    },
                    public_key_size: {
                      type: 'long',
                    },
                    serial_number: {
                      type: 'keyword',
                    },
                    signature_algorithm: {
                      type: 'keyword',
                    },
                    subject: {
                      properties: {
                        common_name: {
                          type: 'keyword',
                        },
                        country: {
                          type: 'keyword',
                        },
                        distinguished_name: {
                          type: 'keyword',
                        },
                        locality: {
                          type: 'keyword',
                        },
                        organization: {
                          type: 'keyword',
                        },
                        organizational_unit: {
                          type: 'keyword',
                        },
                        state_or_province: {
                          type: 'keyword',
                        },
                      },
                    },
                    version_number: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
            curve: {
              type: 'keyword',
            },
            established: {
              type: 'boolean',
            },
            next_protocol: {
              type: 'keyword',
            },
            resumed: {
              type: 'boolean',
            },
            server: {
              properties: {
                certificate: {
                  type: 'keyword',
                },
                certificate_chain: {
                  type: 'keyword',
                },
                hash: {
                  properties: {
                    md5: {
                      type: 'keyword',
                    },
                    sha1: {
                      type: 'keyword',
                    },
                    sha256: {
                      type: 'keyword',
                    },
                  },
                },
                issuer: {
                  type: 'keyword',
                },
                ja3s: {
                  type: 'keyword',
                },
                not_after: {
                  type: 'date',
                },
                not_before: {
                  type: 'date',
                },
                subject: {
                  type: 'keyword',
                },
                x509: {
                  properties: {
                    alternative_names: {
                      type: 'keyword',
                    },
                    issuer: {
                      properties: {
                        common_name: {
                          type: 'keyword',
                        },
                        country: {
                          type: 'keyword',
                        },
                        distinguished_name: {
                          type: 'keyword',
                        },
                        locality: {
                          type: 'keyword',
                        },
                        organization: {
                          type: 'keyword',
                        },
                        organizational_unit: {
                          type: 'keyword',
                        },
                        state_or_province: {
                          type: 'keyword',
                        },
                      },
                    },
                    not_after: {
                      type: 'date',
                    },
                    not_before: {
                      type: 'date',
                    },
                    public_key_algorithm: {
                      type: 'keyword',
                    },
                    public_key_curve: {
                      type: 'keyword',
                    },
                    public_key_exponent: {
                      type: 'long',
                    },
                    public_key_size: {
                      type: 'long',
                    },
                    serial_number: {
                      type: 'keyword',
                    },
                    signature_algorithm: {
                      type: 'keyword',
                    },
                    subject: {
                      properties: {
                        common_name: {
                          type: 'keyword',
                        },
                        country: {
                          type: 'keyword',
                        },
                        distinguished_name: {
                          type: 'keyword',
                        },
                        locality: {
                          type: 'keyword',
                        },
                        organization: {
                          type: 'keyword',
                        },
                        organizational_unit: {
                          type: 'keyword',
                        },
                        state_or_province: {
                          type: 'keyword',
                        },
                      },
                    },
                    version_number: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
            version: {
              type: 'keyword',
            },
            version_protocol: {
              type: 'keyword',
            },
          },
        },
        trace: {
          properties: {
            id: {
              type: 'keyword',
            },
          },
        },
        transaction: {
          properties: {
            id: {
              type: 'keyword',
            },
          },
        },
        url: {
          properties: {
            domain: {
              type: 'keyword',
            },
            extension: {
              type: 'keyword',
            },
            fragment: {
              type: 'keyword',
            },
            full: {
              type: 'wildcard',
            },
            original: {
              type: 'wildcard',
            },
            password: {
              type: 'keyword',
            },
            path: {
              type: 'wildcard',
            },
            port: {
              type: 'long',
            },
            query: {
              type: 'keyword',
            },
            registered_domain: {
              type: 'keyword',
            },
            scheme: {
              type: 'keyword',
            },
            subdomain: {
              type: 'keyword',
            },
            top_level_domain: {
              type: 'keyword',
            },
            username: {
              type: 'keyword',
            },
          },
        },
        user: {
          properties: {
            changes: {
              properties: {
                domain: {
                  type: 'keyword',
                },
                email: {
                  type: 'keyword',
                },
                full_name: {
                  type: 'keyword',
                },
                group: {
                  properties: {
                    domain: {
                      type: 'keyword',
                    },
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                hash: {
                  type: 'keyword',
                },
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                roles: {
                  type: 'keyword',
                },
              },
            },
            domain: {
              type: 'keyword',
            },
            effective: {
              properties: {
                domain: {
                  type: 'keyword',
                },
                email: {
                  type: 'keyword',
                },
                full_name: {
                  type: 'keyword',
                },
                group: {
                  properties: {
                    domain: {
                      type: 'keyword',
                    },
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                hash: {
                  type: 'keyword',
                },
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                roles: {
                  type: 'keyword',
                },
              },
            },
            email: {
              type: 'keyword',
            },
            full_name: {
              type: 'keyword',
            },
            group: {
              properties: {
                domain: {
                  type: 'keyword',
                },
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
              },
            },
            hash: {
              type: 'keyword',
            },
            id: {
              type: 'keyword',
            },
            name: {
              type: 'keyword',
            },
            risk: {
              properties: {
                calculated_level: {
                  type: 'keyword',
                },
                calculated_score: {
                  type: 'float',
                },
                calculated_score_norm: {
                  type: 'float',
                },
                static_level: {
                  type: 'keyword',
                },
                static_score: {
                  type: 'float',
                },
                static_score_norm: {
                  type: 'float',
                },
              },
            },
            roles: {
              type: 'keyword',
            },
            target: {
              properties: {
                domain: {
                  type: 'keyword',
                },
                email: {
                  type: 'keyword',
                },
                full_name: {
                  type: 'keyword',
                },
                group: {
                  properties: {
                    domain: {
                      type: 'keyword',
                    },
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                hash: {
                  type: 'keyword',
                },
                id: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                roles: {
                  type: 'keyword',
                },
              },
            },
          },
        },
        user_agent: {
          properties: {
            device: {
              properties: {
                name: {
                  type: 'keyword',
                },
              },
            },
            name: {
              type: 'keyword',
            },
            original: {
              type: 'keyword',
            },
            os: {
              properties: {
                family: {
                  type: 'keyword',
                },
                full: {
                  type: 'keyword',
                },
                kernel: {
                  type: 'keyword',
                },
                name: {
                  type: 'keyword',
                },
                platform: {
                  type: 'keyword',
                },
                type: {
                  type: 'keyword',
                },
                version: {
                  type: 'keyword',
                },
              },
            },
            version: {
              type: 'keyword',
            },
          },
        },
        vulnerability: {
          properties: {
            category: {
              type: 'keyword',
            },
            classification: {
              type: 'keyword',
            },
            description: {
              type: 'keyword',
            },
            enumeration: {
              type: 'keyword',
            },
            id: {
              type: 'keyword',
            },
            reference: {
              type: 'keyword',
            },
            report_id: {
              type: 'keyword',
            },
            scanner: {
              properties: {
                vendor: {
                  type: 'keyword',
                },
              },
            },
            score: {
              properties: {
                base: {
                  type: 'float',
                },
                environmental: {
                  type: 'float',
                },
                temporal: {
                  type: 'float',
                },
                version: {
                  type: 'keyword',
                },
              },
            },
            severity: {
              type: 'keyword',
            },
          },
        },
      },
    },
  },
};
