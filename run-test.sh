#!/bin/bash

# Variables to hold total execution time for const and let
node_total_const_time=0
node_total_let_time=0
bun_total_const_time=0
bun_total_let_time=0

# Number of iterations
iterations=100

# Run the test script with Node.js
for ((i=1; i<=iterations; i++))
do
  node_output=$(node test.js)
  node_const_time=$(echo "$node_output" | grep 'Average time with const:' | awk '{print $5}')
  node_let_time=$(echo "$node_output" | grep 'Average time with let:' | awk '{print $5}')
  node_total_const_time=$((node_total_const_time + node_const_time))
  node_total_let_time=$((node_total_let_time + node_let_time))
done

# Run the test script with Bun
for ((i=1; i<=iterations; i++))
do
  bun_output=$(bun test.js)
  bun_const_time=$(echo "$bun_output" | grep 'Average time with const:' | awk '{print $5}')
  bun_let_time=$(echo "$bun_output" | grep 'Average time with let:' | awk '{print $5}')
  bun_total_const_time=$((bun_total_const_time + bun_const_time))
  bun_total_let_time=$((bun_total_let_time + bun_let_time))
done

# Calculate average times
node_avg_const_time=$((node_total_const_time / iterations))
node_avg_let_time=$((node_total_let_time / iterations))
bun_avg_const_time=$((bun_total_const_time / iterations))
bun_avg_let_time=$((bun_total_let_time / iterations))

# Report results
echo "Node.js average time with const: $node_avg_const_time nanoseconds"
echo "Node.js average time with let: $node_avg_let_time nanoseconds"
echo "Bun average time with const: $bun_avg_const_time nanoseconds"
echo "Bun average time with let: $bun_avg_let_time nanoseconds"
