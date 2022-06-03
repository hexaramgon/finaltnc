/**
 * This file contains RAW API Implementations (meaning a lot of parameter and return
 * types will be passed directly in and out of the server)
 * But still, it gives us a good basement to start and also enables code prompts in
 * the IDE, so thats not bad :)
 * It is still highly recommended for frontend packages to instead utilize the higher
 * order wrapped-up classes, to further decrease:
 *  1. dependability
 *  2. code complexity
 *  3. reuse of api definitions(e.g. 1 = small, 2 = medium, etc.) across multiple packages
 *
 * To see docs for those two APIs, look into the following page:
 * https://www.notion.so/Calculators-API-Back-end-ccd3d876d49043f89eb8420aedb773e8
 *
 * Other possible APIs to look into further(this version we are not using rn):
 * https://api-central.berkeley.edu/api/11/interactive-docs#/default/getDefaultFootprint
 *
 * @author Yunhao Cao (https://github.com/ToiletCommander)
 */
import { RawGetDefaultAPIInput, RawInput, RawResponse } from "./APIRawTypes";
import APISkeleton from "./APISkeleton";
export declare class GET_DEFAULTS_AND_RESULTS_API extends APISkeleton<RawGetDefaultAPIInput, RawInput & RawResponse> {
    callAPI(param: RawGetDefaultAPIInput): Promise<RawInput & RawResponse>;
}
export declare class COMPUTE_FOOTPRINT_API extends APISkeleton<RawInput, RawInput & RawResponse> {
    callAPI(param: RawInput): Promise<RawInput & RawResponse>;
}
