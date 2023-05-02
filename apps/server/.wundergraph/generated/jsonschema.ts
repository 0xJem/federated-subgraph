// Code generated by wunderctl. DO NOT EDIT.

// @ts-ignore: no-types available
import { JSONSchema7 } from "json-schema";

interface Schema {
	ProtocolMetrics: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	ProtocolMetricsLatest: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	TokenRecords: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	TokenRecordsLatest: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	TokenSupplies: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	TokenSuppliesLatest: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	LatestProtocolMetrics: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	LatestTokenRecords: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	LatestTokenSupplies: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	PaginatedProtocolMetrics: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	PaginatedTokenRecords: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	PaginatedTokenSupplies: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
}

const jsonSchema: Schema = {
	ProtocolMetrics: {
		input: {
			type: "object",
			properties: { pageSize: { type: "integer" }, startDate: { type: "string" }, endDate: { type: "string" } },
			additionalProperties: false,
			required: ["startDate", "endDate"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						treasuryArbitrum_protocolMetrics: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									block: { type: "string" },
									currentAPY: { type: "string" },
									currentIndex: { type: "string" },
									date: { type: "string" },
									gOhmPrice: { type: "string" },
									gOhmTotalSupply: { type: "string" },
									nextDistributedOhm: { type: "string" },
									nextEpochRebase: { type: "string" },
									ohmPrice: { type: "string" },
									ohmTotalSupply: { type: "string" },
									sOhmCirculatingSupply: { type: "string" },
									timestamp: { type: "string" },
									totalValueLocked: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"block",
									"currentAPY",
									"currentIndex",
									"date",
									"gOhmPrice",
									"gOhmTotalSupply",
									"nextDistributedOhm",
									"nextEpochRebase",
									"ohmPrice",
									"ohmTotalSupply",
									"sOhmCirculatingSupply",
									"timestamp",
									"totalValueLocked",
								],
							},
						},
						treasuryEthereum_protocolMetrics: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									block: { type: "string" },
									currentAPY: { type: "string" },
									currentIndex: { type: "string" },
									date: { type: "string" },
									gOhmPrice: { type: "string" },
									gOhmTotalSupply: { type: "string" },
									nextDistributedOhm: { type: "string" },
									nextEpochRebase: { type: "string" },
									ohmPrice: { type: "string" },
									ohmTotalSupply: { type: "string" },
									sOhmCirculatingSupply: { type: "string" },
									timestamp: { type: "string" },
									totalValueLocked: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"block",
									"currentAPY",
									"currentIndex",
									"date",
									"gOhmPrice",
									"gOhmTotalSupply",
									"nextDistributedOhm",
									"nextEpochRebase",
									"ohmPrice",
									"ohmTotalSupply",
									"sOhmCirculatingSupply",
									"timestamp",
									"totalValueLocked",
								],
							},
						},
						treasuryFantom_protocolMetrics: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									block: { type: "string" },
									currentAPY: { type: "string" },
									currentIndex: { type: "string" },
									date: { type: "string" },
									gOhmPrice: { type: "string" },
									gOhmTotalSupply: { type: "string" },
									nextDistributedOhm: { type: "string" },
									nextEpochRebase: { type: "string" },
									ohmPrice: { type: "string" },
									ohmTotalSupply: { type: "string" },
									sOhmCirculatingSupply: { type: "string" },
									timestamp: { type: "string" },
									totalValueLocked: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"block",
									"currentAPY",
									"currentIndex",
									"date",
									"gOhmPrice",
									"gOhmTotalSupply",
									"nextDistributedOhm",
									"nextEpochRebase",
									"ohmPrice",
									"ohmTotalSupply",
									"sOhmCirculatingSupply",
									"timestamp",
									"totalValueLocked",
								],
							},
						},
						treasuryPolygon_protocolMetrics: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									block: { type: "string" },
									currentAPY: { type: "string" },
									currentIndex: { type: "string" },
									date: { type: "string" },
									gOhmPrice: { type: "string" },
									gOhmTotalSupply: { type: "string" },
									nextDistributedOhm: { type: "string" },
									nextEpochRebase: { type: "string" },
									ohmPrice: { type: "string" },
									ohmTotalSupply: { type: "string" },
									sOhmCirculatingSupply: { type: "string" },
									timestamp: { type: "string" },
									totalValueLocked: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"block",
									"currentAPY",
									"currentIndex",
									"date",
									"gOhmPrice",
									"gOhmTotalSupply",
									"nextDistributedOhm",
									"nextEpochRebase",
									"ohmPrice",
									"ohmTotalSupply",
									"sOhmCirculatingSupply",
									"timestamp",
									"totalValueLocked",
								],
							},
						},
					},
					additionalProperties: false,
					required: [
						"treasuryArbitrum_protocolMetrics",
						"treasuryEthereum_protocolMetrics",
						"treasuryFantom_protocolMetrics",
						"treasuryPolygon_protocolMetrics",
					],
				},
			},
			additionalProperties: false,
		},
	},
	ProtocolMetricsLatest: {
		input: { type: "object", properties: {}, additionalProperties: false },
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						treasuryArbitrum_protocolMetrics: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									block: { type: "string" },
									currentAPY: { type: "string" },
									currentIndex: { type: "string" },
									date: { type: "string" },
									gOhmPrice: { type: "string" },
									gOhmTotalSupply: { type: "string" },
									nextDistributedOhm: { type: "string" },
									nextEpochRebase: { type: "string" },
									ohmPrice: { type: "string" },
									ohmTotalSupply: { type: "string" },
									sOhmCirculatingSupply: { type: "string" },
									timestamp: { type: "string" },
									totalValueLocked: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"block",
									"currentAPY",
									"currentIndex",
									"date",
									"gOhmPrice",
									"gOhmTotalSupply",
									"nextDistributedOhm",
									"nextEpochRebase",
									"ohmPrice",
									"ohmTotalSupply",
									"sOhmCirculatingSupply",
									"timestamp",
									"totalValueLocked",
								],
							},
						},
						treasuryEthereum_protocolMetrics: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									block: { type: "string" },
									currentAPY: { type: "string" },
									currentIndex: { type: "string" },
									date: { type: "string" },
									gOhmPrice: { type: "string" },
									gOhmTotalSupply: { type: "string" },
									nextDistributedOhm: { type: "string" },
									nextEpochRebase: { type: "string" },
									ohmPrice: { type: "string" },
									ohmTotalSupply: { type: "string" },
									sOhmCirculatingSupply: { type: "string" },
									timestamp: { type: "string" },
									totalValueLocked: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"block",
									"currentAPY",
									"currentIndex",
									"date",
									"gOhmPrice",
									"gOhmTotalSupply",
									"nextDistributedOhm",
									"nextEpochRebase",
									"ohmPrice",
									"ohmTotalSupply",
									"sOhmCirculatingSupply",
									"timestamp",
									"totalValueLocked",
								],
							},
						},
						treasuryFantom_protocolMetrics: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									block: { type: "string" },
									currentAPY: { type: "string" },
									currentIndex: { type: "string" },
									date: { type: "string" },
									gOhmPrice: { type: "string" },
									gOhmTotalSupply: { type: "string" },
									nextDistributedOhm: { type: "string" },
									nextEpochRebase: { type: "string" },
									ohmPrice: { type: "string" },
									ohmTotalSupply: { type: "string" },
									sOhmCirculatingSupply: { type: "string" },
									timestamp: { type: "string" },
									totalValueLocked: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"block",
									"currentAPY",
									"currentIndex",
									"date",
									"gOhmPrice",
									"gOhmTotalSupply",
									"nextDistributedOhm",
									"nextEpochRebase",
									"ohmPrice",
									"ohmTotalSupply",
									"sOhmCirculatingSupply",
									"timestamp",
									"totalValueLocked",
								],
							},
						},
						treasuryPolygon_protocolMetrics: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									block: { type: "string" },
									currentAPY: { type: "string" },
									currentIndex: { type: "string" },
									date: { type: "string" },
									gOhmPrice: { type: "string" },
									gOhmTotalSupply: { type: "string" },
									nextDistributedOhm: { type: "string" },
									nextEpochRebase: { type: "string" },
									ohmPrice: { type: "string" },
									ohmTotalSupply: { type: "string" },
									sOhmCirculatingSupply: { type: "string" },
									timestamp: { type: "string" },
									totalValueLocked: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"block",
									"currentAPY",
									"currentIndex",
									"date",
									"gOhmPrice",
									"gOhmTotalSupply",
									"nextDistributedOhm",
									"nextEpochRebase",
									"ohmPrice",
									"ohmTotalSupply",
									"sOhmCirculatingSupply",
									"timestamp",
									"totalValueLocked",
								],
							},
						},
					},
					additionalProperties: false,
					required: [
						"treasuryArbitrum_protocolMetrics",
						"treasuryEthereum_protocolMetrics",
						"treasuryFantom_protocolMetrics",
						"treasuryPolygon_protocolMetrics",
					],
				},
			},
			additionalProperties: false,
		},
	},
	TokenRecords: {
		input: {
			type: "object",
			properties: { pageSize: { type: "integer" }, startDate: { type: "string" }, endDate: { type: "string" } },
			additionalProperties: false,
			required: ["startDate", "endDate"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						treasuryArbitrum_tokenRecords: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									blockchain: { type: "string" },
									category: { type: "string" },
									date: { type: "string" },
									isBluechip: { type: "boolean" },
									isLiquid: { type: "boolean" },
									multiplier: { type: "string" },
									rate: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									value: { type: "string" },
									valueExcludingOhm: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"blockchain",
									"category",
									"date",
									"isBluechip",
									"isLiquid",
									"multiplier",
									"rate",
									"source",
									"sourceAddress",
									"timestamp",
									"token",
									"tokenAddress",
									"value",
									"valueExcludingOhm",
								],
							},
						},
						treasuryEthereum_tokenRecords: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									blockchain: { type: "string" },
									category: { type: "string" },
									date: { type: "string" },
									isBluechip: { type: "boolean" },
									isLiquid: { type: "boolean" },
									multiplier: { type: "string" },
									rate: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									value: { type: "string" },
									valueExcludingOhm: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"blockchain",
									"category",
									"date",
									"isBluechip",
									"isLiquid",
									"multiplier",
									"rate",
									"source",
									"sourceAddress",
									"timestamp",
									"token",
									"tokenAddress",
									"value",
									"valueExcludingOhm",
								],
							},
						},
						treasuryFantom_tokenRecords: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									blockchain: { type: "string" },
									category: { type: "string" },
									date: { type: "string" },
									isBluechip: { type: "boolean" },
									isLiquid: { type: "boolean" },
									multiplier: { type: "string" },
									rate: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									value: { type: "string" },
									valueExcludingOhm: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"blockchain",
									"category",
									"date",
									"isBluechip",
									"isLiquid",
									"multiplier",
									"rate",
									"source",
									"sourceAddress",
									"timestamp",
									"token",
									"tokenAddress",
									"value",
									"valueExcludingOhm",
								],
							},
						},
						treasuryPolygon_tokenRecords: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									blockchain: { type: "string" },
									category: { type: "string" },
									date: { type: "string" },
									isBluechip: { type: "boolean" },
									isLiquid: { type: "boolean" },
									multiplier: { type: "string" },
									rate: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									value: { type: "string" },
									valueExcludingOhm: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"blockchain",
									"category",
									"date",
									"isBluechip",
									"isLiquid",
									"multiplier",
									"rate",
									"source",
									"sourceAddress",
									"timestamp",
									"token",
									"tokenAddress",
									"value",
									"valueExcludingOhm",
								],
							},
						},
					},
					additionalProperties: false,
					required: [
						"treasuryArbitrum_tokenRecords",
						"treasuryEthereum_tokenRecords",
						"treasuryFantom_tokenRecords",
						"treasuryPolygon_tokenRecords",
					],
				},
			},
			additionalProperties: false,
		},
	},
	TokenRecordsLatest: {
		input: { type: "object", properties: {}, additionalProperties: false },
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						treasuryArbitrum_tokenRecords: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									blockchain: { type: "string" },
									category: { type: "string" },
									date: { type: "string" },
									isBluechip: { type: "boolean" },
									isLiquid: { type: "boolean" },
									multiplier: { type: "string" },
									rate: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									value: { type: "string" },
									valueExcludingOhm: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"blockchain",
									"category",
									"date",
									"isBluechip",
									"isLiquid",
									"multiplier",
									"rate",
									"source",
									"sourceAddress",
									"timestamp",
									"token",
									"tokenAddress",
									"value",
									"valueExcludingOhm",
								],
							},
						},
						treasuryEthereum_tokenRecords: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									blockchain: { type: "string" },
									category: { type: "string" },
									date: { type: "string" },
									isBluechip: { type: "boolean" },
									isLiquid: { type: "boolean" },
									multiplier: { type: "string" },
									rate: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									value: { type: "string" },
									valueExcludingOhm: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"blockchain",
									"category",
									"date",
									"isBluechip",
									"isLiquid",
									"multiplier",
									"rate",
									"source",
									"sourceAddress",
									"timestamp",
									"token",
									"tokenAddress",
									"value",
									"valueExcludingOhm",
								],
							},
						},
						treasuryFantom_tokenRecords: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									blockchain: { type: "string" },
									category: { type: "string" },
									date: { type: "string" },
									isBluechip: { type: "boolean" },
									isLiquid: { type: "boolean" },
									multiplier: { type: "string" },
									rate: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									value: { type: "string" },
									valueExcludingOhm: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"blockchain",
									"category",
									"date",
									"isBluechip",
									"isLiquid",
									"multiplier",
									"rate",
									"source",
									"sourceAddress",
									"timestamp",
									"token",
									"tokenAddress",
									"value",
									"valueExcludingOhm",
								],
							},
						},
						treasuryPolygon_tokenRecords: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									blockchain: { type: "string" },
									category: { type: "string" },
									date: { type: "string" },
									isBluechip: { type: "boolean" },
									isLiquid: { type: "boolean" },
									multiplier: { type: "string" },
									rate: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									value: { type: "string" },
									valueExcludingOhm: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"blockchain",
									"category",
									"date",
									"isBluechip",
									"isLiquid",
									"multiplier",
									"rate",
									"source",
									"sourceAddress",
									"timestamp",
									"token",
									"tokenAddress",
									"value",
									"valueExcludingOhm",
								],
							},
						},
					},
					additionalProperties: false,
					required: [
						"treasuryArbitrum_tokenRecords",
						"treasuryEthereum_tokenRecords",
						"treasuryFantom_tokenRecords",
						"treasuryPolygon_tokenRecords",
					],
				},
			},
			additionalProperties: false,
		},
	},
	TokenSupplies: {
		input: {
			type: "object",
			properties: { pageSize: { type: "integer" }, startDate: { type: "string" }, endDate: { type: "string" } },
			additionalProperties: false,
			required: ["startDate", "endDate"],
		},
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						treasuryArbitrum_tokenSupplies: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									date: { type: "string" },
									pool: { type: "string" },
									poolAddress: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									supplyBalance: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									type: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"date",
									"supplyBalance",
									"timestamp",
									"token",
									"tokenAddress",
									"type",
								],
							},
						},
						treasuryEthereum_tokenSupplies: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									date: { type: "string" },
									pool: { type: "string" },
									poolAddress: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									supplyBalance: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									type: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"date",
									"supplyBalance",
									"timestamp",
									"token",
									"tokenAddress",
									"type",
								],
							},
						},
						treasuryFantom_tokenSupplies: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									date: { type: "string" },
									pool: { type: "string" },
									poolAddress: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									supplyBalance: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									type: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"date",
									"supplyBalance",
									"timestamp",
									"token",
									"tokenAddress",
									"type",
								],
							},
						},
						treasuryPolygon_tokenSupplies: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									date: { type: "string" },
									pool: { type: "string" },
									poolAddress: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									supplyBalance: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									type: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"date",
									"supplyBalance",
									"timestamp",
									"token",
									"tokenAddress",
									"type",
								],
							},
						},
					},
					additionalProperties: false,
					required: [
						"treasuryArbitrum_tokenSupplies",
						"treasuryEthereum_tokenSupplies",
						"treasuryFantom_tokenSupplies",
						"treasuryPolygon_tokenSupplies",
					],
				},
			},
			additionalProperties: false,
		},
	},
	TokenSuppliesLatest: {
		input: { type: "object", properties: {}, additionalProperties: false },
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						treasuryArbitrum_tokenSupplies: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									date: { type: "string" },
									pool: { type: "string" },
									poolAddress: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									supplyBalance: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									type: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"date",
									"supplyBalance",
									"timestamp",
									"token",
									"tokenAddress",
									"type",
								],
							},
						},
						treasuryEthereum_tokenSupplies: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									date: { type: "string" },
									pool: { type: "string" },
									poolAddress: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									supplyBalance: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									type: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"date",
									"supplyBalance",
									"timestamp",
									"token",
									"tokenAddress",
									"type",
								],
							},
						},
						treasuryFantom_tokenSupplies: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									date: { type: "string" },
									pool: { type: "string" },
									poolAddress: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									supplyBalance: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									type: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"date",
									"supplyBalance",
									"timestamp",
									"token",
									"tokenAddress",
									"type",
								],
							},
						},
						treasuryPolygon_tokenSupplies: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "string" },
									balance: { type: "string" },
									block: { type: "string" },
									date: { type: "string" },
									pool: { type: "string" },
									poolAddress: { type: "string" },
									source: { type: "string" },
									sourceAddress: { type: "string" },
									supplyBalance: { type: "string" },
									timestamp: { type: "string" },
									token: { type: "string" },
									tokenAddress: { type: "string" },
									type: { type: "string" },
								},
								additionalProperties: false,
								required: [
									"id",
									"balance",
									"block",
									"date",
									"supplyBalance",
									"timestamp",
									"token",
									"tokenAddress",
									"type",
								],
							},
						},
					},
					additionalProperties: false,
					required: [
						"treasuryArbitrum_tokenSupplies",
						"treasuryEthereum_tokenSupplies",
						"treasuryFantom_tokenSupplies",
						"treasuryPolygon_tokenSupplies",
					],
				},
			},
			additionalProperties: false,
		},
	},
	LatestProtocolMetrics: {
		input: { type: "object", properties: {} },
		response: { type: "object", properties: { data: {} } },
	},
	LatestTokenRecords: {
		input: { type: "object", properties: {} },
		response: { type: "object", properties: { data: {} } },
	},
	LatestTokenSupplies: {
		input: { type: "object", properties: {} },
		response: { type: "object", properties: { data: {} } },
	},
	PaginatedProtocolMetrics: {
		input: {
			type: "object",
			properties: {
				startDate: { type: "string", description: "The start date in the YYYY-MM-DD format." },
				dateOffset: {
					type: "number",
					description: "The number of days to paginate by. Reduce the value if data is missing.",
				},
			},
			required: ["startDate"],
			additionalProperties: false,
			$schema: "http://json-schema.org/draft-07/schema#",
		},
		response: { type: "object", properties: { data: {} } },
	},
	PaginatedTokenRecords: {
		input: {
			type: "object",
			properties: {
				startDate: { type: "string", description: "The start date in the YYYY-MM-DD format." },
				dateOffset: {
					type: "number",
					description: "The number of days to paginate by. Reduce the value if data is missing.",
				},
			},
			required: ["startDate"],
			additionalProperties: false,
			$schema: "http://json-schema.org/draft-07/schema#",
		},
		response: { type: "object", properties: { data: {} } },
	},
	PaginatedTokenSupplies: {
		input: {
			type: "object",
			properties: {
				startDate: { type: "string", description: "The start date in the YYYY-MM-DD format." },
				dateOffset: {
					type: "number",
					description: "The number of days to paginate by. Reduce the value if data is missing.",
				},
				pageSize: {
					type: "number",
					description: "The number of records per page. Increase the value if data is missing.",
				},
			},
			required: ["startDate"],
			additionalProperties: false,
			$schema: "http://json-schema.org/draft-07/schema#",
		},
		response: { type: "object", properties: { data: {} } },
	},
};
export default jsonSchema;