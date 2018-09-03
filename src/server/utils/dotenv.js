import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

/*
 * getDotenv()
* processes .env file (if it exists). Sets process.env[VARS] as a
* side-effect.
*
* Returns true.
*/
export default function getDotenv() {
    const myConfig = {silent: true};
    if (process.env.NODE_ENV !== 'production') {
        myConfig.path = '.env.dev'
    }
    const myEnv = dotenv.config(myConfig);
    dotenvExpand(myEnv);

    return true
}
