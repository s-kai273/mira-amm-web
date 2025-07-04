import {useCallback} from "react";
import {openNewTab} from "@/src/utils/common";
import {CoinName} from "@/src/utils/coinsConfig";
import {FuelAppUrl} from "@/src/utils/constants";
import {Button} from "@/meshwave-ui/Button";
import {CheckCircle} from "lucide-react";

export default function RemoveLiquiditySuccessModal({
  coinA,
  coinB,
  firstCoinAmount,
  secondCoinAmount,
  transactionHash,
}: {
  coinA: CoinName;
  coinB: CoinName;
  firstCoinAmount: string;
  secondCoinAmount: string;
  transactionHash: string | undefined;
}) {
  const handleViewTransactionClick = useCallback(() => {
    if (!transactionHash) return;
    openNewTab(`${FuelAppUrl}/tx/${transactionHash}/simple`);
  }, [transactionHash]);

  const subText = `Removed ${firstCoinAmount} ${coinA} and ${secondCoinAmount} ${coinB}`;

  return (
    <div className="flex flex-col items-center gap-[12px] lg:gap-[24px]">
      <div className="lg:w-[80px] lg:h-[80px]">
        <CheckCircle />
      </div>
      <p className="font-medium text-[22px] leading-[26px] text-center">
        Success
      </p>
      <p className="text-[14px] leading-[16px] text-content-dimmed-dark text-center">
        {subText}
      </p>
      <Button onClick={handleViewTransactionClick} block>
        View transaction
      </Button>
    </div>
  );
}
