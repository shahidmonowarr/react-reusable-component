import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md";
import Alert from "../components/Alert";

const Alerts = () => {
  return (
    <div id="alerts">
      <h2 className="font-medium text-3xl mb-3">Alerts</h2>

      <div className="flex flex-col gap-3">
        <span className="text-sm">Info Alert</span>
        <Alert bgColor="info" text="Something Changed" />

        <span className="text-sm">Warning Alert</span>
        <Alert bgColor="warning" text="Invalid email address" />

        <span className="text-sm">Success Alert</span>
        <Alert bgColor="success" text="Order confirmed" />

        <span className="text-sm">Error Alert</span>
        <Alert bgColor="error" text="Order failed" />

        <h2 className="font-medium">Alert With Icon</h2>

        <span className="text-sm">Info Alert</span>
        <Alert bgColor="info">
          <AiOutlineInfoCircle className="text-lg" />
          Something changed
        </Alert>

        <span className="text-sm">Warning Alert</span>
        <Alert bgColor="warning">
          <AiOutlineWarning className="text-lg" />
          Invalid email address
        </Alert>

        <span className="text-sm">Success Alert</span>
        <Alert bgColor="success">
          <AiOutlineCheckCircle className="text-lg" />
          Order confirmed
        </Alert>

        <span className="text-sm">Error Alert</span>
        <Alert bgColor="error">
          <MdOutlineDangerous className="text-lg" />
          Order failed
        </Alert>
      </div>
    </div>
  );
};

export default Alerts;
