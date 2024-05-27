import { TbShirtSport } from "react-icons/tb";
import styles from './PageContent.module.css';
import { LineChart } from "@mui/x-charts";
import { FaRegUser } from "react-icons/fa";
type Props = {}

const PageContent = (props: Props) => {
    return (
        <>
            <div className={styles.main_container}>
                <h3>Dashboard</h3>
                <div className={styles.main_cards}>
                    <div className={styles.card}>
                        <div className={styles.card_inner}>
                            <h3>Áo</h3>
                            <TbShirtSport className={styles.card_icon} />
                        </div>
                        <h1>300</h1>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_inner}>
                            <h3>Đơn hàng</h3>
                            <TbShirtSport className={styles.card_icon} />
                        </div>
                        <h1>300</h1>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_inner}>
                            <h3>Người dùng</h3>
                            <FaRegUser className={styles.card_icon} />
                        </div>
                        <h1>400</h1>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_inner}>
                            <h3>Áo</h3>
                            <TbShirtSport className={styles.card_icon} />
                        </div>
                        <h1>300</h1>
                    </div>
                </div>
                <p className="text-black">Doanh thu</p>
                <div className={styles.charts}>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        height={300}
                        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                        grid={{ vertical: true, horizontal: true }}
                    />
                </div>
            </div>


        </>
    );
};

export default PageContent;